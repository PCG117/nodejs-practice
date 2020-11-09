/*
 * @Author: your name
 * @Date: 2020-10-15 16:29:50
 * @LastEditTime: 2020-10-15 16:33:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \NodeJS\可写流.js
 */
const {Writable}=require('stream')
class CustomWritableStream extends Writable{
    _write(chunk,encoding,callback){
        console.log('chunk',chunk)
        callback&&callback()
    }
}
const ws = new CustomWritableStream()
ws.on('finish',()=>{
    console.log('finish...');
})
ws.write('hello','utf-8',()=>{
    console.log('after write...');
})
ws.end()