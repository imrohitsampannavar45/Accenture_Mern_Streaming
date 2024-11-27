const express = require('express');
const cors = require('cors');
const app = express();
// Define CORS options
const corsOptions = {
  origin: 'http://example.com', // Allow only this origin
  methods: 'GET,POST', // Allow only GET and POST methods
  allowedHeaders: 'Content-Type,Authorization', // Allow only these headers
};
// Use the CORS middleware with options
app.use(cors(corsOptions));
// Define your routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
