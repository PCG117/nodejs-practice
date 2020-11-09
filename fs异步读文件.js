/*
 * @Author: your name
 * @Date: 2020-10-16 08:49:29
 * @LastEditTime: 2020-10-16 08:53:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \NodeJS\fs异步读文件.js
 */
const fs=require('fs')
fs.open('./test1.txt','r',(err,fd)=>{
    if(err){
        console.log('open file err:',err);
    }else{
        const buf = Buffer.alloc(100)
        fs.read(fd,buf,0,50,0,(err)=>{
            if(err){
                console.log('read file err:',err);
            }else{
                console.log(buf);
            }
            fs.close(fd,err=>{
                if(err){
                    console.log('close file error:',err);
                }else{
                    console.log('close file success');
                }
            })
        })
    }
})