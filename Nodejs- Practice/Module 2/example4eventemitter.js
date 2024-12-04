const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }
const myEmitter = new MyEmitter();

var listener1 = function listener1() {
    console.log('listener1 executed');
}

var listener2 = function listener2() {
    console.log('listener 2 executed');
}


myEmitter.addListener('connection', listener1);
myEmitter.on('connection', listener2);


var eventListeners = myEmitter.listenerCount('connection');
console.log(eventListeners + " Listener(s) listening to connection events");

myEmitter.emit('connection');


myEmitter.removeListener('connection', listener1);
console.log("Listener 1 will not listen now ");


myEmitter.emit('connection');
eventListeners = myEmitter.listenerCount('connection');
console.log(eventListeners + "Listener(s) listening to connection event");
console.log("Program Ended ");