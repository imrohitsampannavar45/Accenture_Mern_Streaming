var fs = require("fs");

var data = "";
var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('utf-8');

readerStream.on('data', function (chunk) {
    console.log('got chunk of', chunk.length, 'bytes');
    data += chunk;
});

readerStream.on('end', function () {
    console.log(data);
})

readerStream.on('error', function (err) {
    console.log(err.stack);

})

console.log("Program Ended")