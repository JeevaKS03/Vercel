const express = require('express');
const app = express();

// Middleware and routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.listen(3000, () => console.log("Server ready on port 3000."));
// Export the app as a handler for Vercel
module.exports = app;
