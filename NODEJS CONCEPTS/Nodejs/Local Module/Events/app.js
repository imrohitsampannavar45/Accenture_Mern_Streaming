const { eventemitter: emitter } = require("./event");

function display() {
    emitter.emit("info", "just got inside display", "general", "display");
}

display();