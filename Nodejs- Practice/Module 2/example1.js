// A Blocking call causes results to be returned synchronously 

var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString())
console.log("Program Ended")