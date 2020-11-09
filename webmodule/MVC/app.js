
const http= require('http')
const fs= require('fs')
const path= require('path')
const mime= require('./mime.json')
const url=require('url')

const server = http.createServer(async (req,res)=>{
    const parsedUrl = url.parse(req.url, true)
    const pathname = parsedUrl.pathname
    if (pathname == "/" || pathname == "/index.html") {
        try {
            const filePath = path.normalize(__dirname + "/static/index.html")
            const data = await get()
            //引入模版
            const template = swig.compileFile(filePath)
            const html = template({
                data
            })
            res.setHeader('Content-type', "text/html;charset=UTF-8")
            res.end(html)
        }catch(e){
            console.log(e);
            res.statusCode = 404
            res.setHeader('Content-Type', 'text/html;charset=utf-8')
            res.end('<h1>请求出错了</h1>')
        }
        // fs.readFile(filePath,(err,data)=>{
        //     if(err){
        //         res.setHeader('Content-type',"text/html;charset=UTF-8")
        //         res.statusCode = 404
        //         res.end('<h1>请求出错了</h1>')
        //     }else{
        //         const extname=path.extname(filePath)
        //         const mimeType=mime[extname]||'text/plain'
        //         res.setHeader('Content-type',mimeType+';charset=UTF-8')
        //         res.end(data)
        //     }
        // })        
    }
    else if(pathname=='/add'){
        let body=''
        req.on('data',(chunk)=>{
            body+=chunk
        })
        req.on('end',async()=>{
            try{
                const query=querystring.parse(body)
                const data = await add(query.task)
                res.end(JSON.stringify({
                    code:0,
                    msg:'add ok',
                    data
                }))
            }catch(e){
                console.log(e);
                res.end(JSON.stringify({
                    code:1,
                    msg:'add error'
                }))
            }
        })
        res.end(JSON.stringify({
            code:0,
            msg:'add ok'
        }))
    }
    else if(pathname=='/del'){
        const id=parsedUrl.query.id
        try{
            await del(id)
            return res.end(JSON.stringify({
            code:0,
            msg:'del ok'
        }))
    }catch(e){
        return res.end(JSON.stringify({
            code:1,
            msg:'del error'
        }))
    }
}
    else if(pathname=='/uploadAvatar'){
        let incomingForm=new IncomingForm({
            uploadDir:'./static/images',
            keepExtensions:true
        })
        incomingForm.parse(req,(err,fields,files)=>{
            if(err){
                console.log('up;oad avatar error:',err);
                res.end(JSON.stringify({
                    code:1,
                    msg:'uploadAvatar err',
                }))
            }else{
                res.end(JSON.stringify({
                    code:0,
                    msg:'uploadAvatar ok',
                    data:files.avatar.path.substr(7)
                }))
            }
        })
        res.end(JSON.stringify({
            code:0,
            msg:'uploadAvatar ok'
        }))
    }
    else{
        const filePath=path.normalize(__dirname+'/static/'+pathname)
        fs.readFile(filePath,(err,data)=>{
            if(err){
                res.setHeader('Content-type','text/html;charset=UTF-8')
                res.statusCode=404
                res.end('<h1>请求出错了</h1>')
            }else{
                const extname = path.extname(filePath)
                const mimeType = mime[extname] || 'text/plain'
                res.setHeader('Content-type', mimeType + ";charset=UTF-8")
                res.end(data)
            }
        })
    }
})
server.listen(3000,()=>{
    console.log('Server running at http://127.0.0.1:3000/');
})