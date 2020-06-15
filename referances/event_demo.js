const EventEmitter = require('events')

// create emitter class

class MyEmitter extends EventEmitter {

}

//  init object

const myEmitter = new MyEmitter()

// create event listener

myEmitter.on('event', () => {
    console.log('event fired')
})

// 

myEmitter.emit('event')