const express = require('express');
const app = express();

// Middleware and routes
app.get('/about', (req, res) => {
  res.send('Hello, World!');
});

// Export the app as a handler for Vercel
module.exports = app;
