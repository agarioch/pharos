const express = require('express');
const app = express();

//! NOTE: Normally I would move config to a .env file
const PORT = 8080;
const CLIENT = 'http://localhost:3000';

const data = require('./data');

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', CLIENT);
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//! NOTE: normally I would follow a MVC pattern for the server with routes, & controllers in separate folders
// Routes
app.get('/data', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`API listening at http://localhost:${PORT}`);
});
