const http = require('http');

const requestListener = function (req, res) {
  try {
    // Your request handling logic here
    res.writeHead(200);
    res.end('Hello, World!');
  } catch (err) {
    console.error('Error handling request:', err);
    res.writeHead(500);
    res.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

// Handle server errors
server.on('error', err => {
  console.error('Server error:', err);
});

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});