/*
 * @Author: your name
 * @Date: 2020-10-16 08:21:57
 * @LastEditTime: 2020-10-16 08:23:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \NodeJS\fs-readfilesync.js
 */
const fs=require('fs')
const data=fs.readFileSync('./test1.txt',{encoding:'utf8'})
console.log(data);