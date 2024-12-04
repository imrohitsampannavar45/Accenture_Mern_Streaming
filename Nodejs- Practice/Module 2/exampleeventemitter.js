const EventEmitter = require('events')

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();
myEmitter.items = ["Banglore", "Bombay", "AP", "madras", "Delhi", "Calcutta"];
myEmitter.on("changedItem", function() {
    console.log("Event has occured");
    console.log("index: "+ this.lastIndexChanged + "value: "+this.items[this.lastIndexChanged]);
});

function setItem(index, value){
    myEmitter.items[index] = value;
    myEmitter.lastIndexChanged = index;
    myEmitter.emit("changedItem");
}
setItem(1, "Mumabi");