let http  = require('http')
// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on('request', (request, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
});
// res.writeHead(200, { 'Content-Type': 'text/html' });
// res.end("<h2>Hello World </h2>")
// });

server.listen(8000,()=>console.log("Server is Running on port no 8000"));
