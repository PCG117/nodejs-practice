// const { EventEmitter } = require("events")

const { EventEmitter } = require("events");

// const EventEmitter=require('events')
// const emitter = new EventEmitter()
// emitter.on('test',()=>{
//     console.log('execute test fn...');
// })
// emitter.emit('test')
class CustomEmitter extends EventEmitter{

}
const emitter = new CustomEmitter()
emitter.on('test',()=>{
    console.log('execute test fn...');
})
emitter.emit('test')