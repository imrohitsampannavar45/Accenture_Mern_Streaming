const http = require('http');
const url = require('url');

// Create a local server to receive data from
const server = http.createServer((request, res) => {
  const queryObject = url.parse(request.url, true).query;
  const username = queryObject.username || 'Rohit';

  res.writeHead(200, { 'Content-Type': 'text' });
  res.end(JSON.stringify({
    message: `Hello ${username}!`,
  }));
});

// Start the server and listen on port 8000
server.listen(8000, () => {
  console.log('Server is running on port 8000');
});
