const http = require('http'); // Import the built-in http module
const hostname = '0.0.0.0';
const port = 3000;

// Create the server instance
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  // Define API routes based on URL and HTTP method
  if (req.method === 'GET' && req.url === '/api/greeting') {
    res.end(JSON.stringify({ message: 'Hello, World!' }));
  } else if (req.method === 'GET' && req.url === '/api/status') {
    res.end(JSON.stringify({ status: 'Running', service: 'Single File API' }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Endpoint not found' }));
  }
});

// Start listening for requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
