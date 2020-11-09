/*
 * @Author: your name
 * @Date: 2020-10-16 15:44:38
 * @LastEditTime: 2020-10-16 15:45:07
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \NodeJS\HMAC加密.js
 */
const crypto = require('crypto')
const hmac = crypto.createHmac('sha256', '密钥')
hmac.update('要创建哈希的数据')
console.log(hmac.digest('hex'))