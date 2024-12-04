var http = require('http');
var server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write("<h1>Hello Rohit Sampannavar</h1>");
    res.end();
})

server.listen(7000, () => console.log("server listening at port 7000"))