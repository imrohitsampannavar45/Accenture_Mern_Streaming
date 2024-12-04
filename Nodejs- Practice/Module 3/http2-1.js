var http2 = require('http2');
var server = http2.createServer();

server.on('stream', (stream, requestHeaders) => {
    stream.respond({ ':status': 200, 'content-type': 'text/plain' });
    stream.end('hello from node !!');
});
server.listen(4000, function () {
    console.log("Server is Listening");
})
