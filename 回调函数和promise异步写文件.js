/*
 * @Author: your name
 * @Date: 2020-10-16 09:49:30
 * @LastEditTime: 2020-10-16 10:03:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \NodeJS\回调函数异步写文件.js
 */
// const fs = require('fs')
// fs.open('./test1.txt','w',(err,fd)=>{
//     if(err){
//         console.log('open file error:',err)
//     }else{
//         fs.write(fd,'hello',(err)=>{
//             if(err){
//                 console.log('write file error:',err)
//             }else{
//                 console.log('write file success')
//             }
//             fs.close(fd,err=>{
//                 if(err){
//                     console.log('close file error:',err)
//                 }else{
//                     console.log('close file success')
//                 }                
//             })
//         })
//     }
// })
//回调函数异步写文件
// const fs = require('fs')
// fs.writeFile('./01.txt','hello',{flag:'w'},err=>{
//     if(err){
//         console.log('write file error:',err)
//     }else{
//         console.log('write file success')
//     }
// })
//promise异步写文件
const fs = require('fs')
const util = require('util')
const writeFile = util.promisify(fs.writeFile)

writeFile('./test1.txt','hello',{flag:'a'})
.then(data=>{
    console.log('write file success')
})
.catch(err=>{
    console.log('write file error:',err)
})