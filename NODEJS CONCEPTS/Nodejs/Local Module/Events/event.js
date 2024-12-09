let events = require("events");
let eventemitter = new events.EventEmitter();

// Error msg, warning msg, success msg listeners
eventemitter.on("error", (msg, mname, fnname) => {
    console.log(
        "Error:",
        msg,
        "happened in the function",
        fnname,
        "in the",
        mname,
        "file"
    );
});

eventemitter.on("info", (msg, mname, fnname) => {
    console.log(
        "Info:",
        msg,
        "happened in the function",
        fnname,
        "in the",
        mname,
        "file"
    );
});

eventemitter.on("warning", (msg, mname, fnname) => {
    console.log(
        "Warning:",
        msg,
        "happened in the function",
        fnname,
        "in the",
        mname,
        "file"
    );
});

module.exports = { eventemitter };
