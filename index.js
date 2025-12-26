const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies (necessary for POST/PUT requests)
app.use(express.json());

// Define a GET route
app.get('/api/greeting', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
});

// Define a GET route
app.get('/api/status', (req, res) => {
  res.status(200).json({ status: "Running", service: 'Single File API' });
});



// Start the server
app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});
