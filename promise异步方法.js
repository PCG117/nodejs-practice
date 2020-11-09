/*
 * @Author: your name
 * @Date: 2020-10-16 09:17:10
 * @LastEditTime: 2020-10-16 09:25:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \NodeJS\promise异步方法.js
 */
const fs = require('fs')
const util = require('util')
const readFile = util.promisify(fs.readFile)

readFile('./test1.txt',{flag:'r',encoding:'utf8'})
.then(data=>{
    console.log(data) 
})
.catch(err=>{
    console.log('read file err:',err)    
})

// const fs = require('fs/promises')
// fs.readFile('./test.txt',{flag:'r',encoding:'utf8'})
// .then(data=>{
//     console.log(data) 
// })
// .catch(err=>{
//     console.log('read file err:',err)    
// })