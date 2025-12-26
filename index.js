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

app.get('/api/user', (req, res) => {
  res.status(200).json({ user: "Gabriely" });
});

// Define a POST route (example of handling input)
app.post('/api/data', (req, res) => {
  const receivedData = req.body;
  console.log('Received data:', receivedData);
  res.status(201).json({ message: 'Data received successfully', data: receivedData });
});

// Start the server
app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});
