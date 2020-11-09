const http=require('http')
const option={
    hostname:'127.0.0.1',
    port:3000,
    path:'/?key1=1&key2=2',
    method:'GET'
}
const req = http.request(option,(res)=>{
    res.setEncoding('utf8')
    res.on('data',chunk=>{
        console.log(chunk);
    })
})
req.end()