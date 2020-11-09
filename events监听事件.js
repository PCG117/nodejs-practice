/*
 * @Author: your name
 * @Date: 2020-10-15 15:26:20
 * @LastEditTime: 2020-10-15 15:28:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \NodeJS\events监听事件.js
 */
const EventEmitter = require('events')
const emitter = new EventEmitter()
//监听绑定
emitter.on('test1',()=>{
    console.log('execute test fn1...')
})
emitter.on('test1',()=>{
    console.log('test fn1...')
})
emitter.on('test1',(arg)=>{
    console.log(arg)
})
emitter.on('test2',()=>{
    console.log('execute test fn1...')
})
//事件触发
emitter.emit('test1',[1,2,3,4])