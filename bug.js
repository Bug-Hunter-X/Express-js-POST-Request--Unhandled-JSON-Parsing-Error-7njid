const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // ... process data ...
  res.status(201).json({ message: 'Data received' });
});

//Problem: Unexpected token in JSON request
//Scenario: A client sends a request with invalid JSON (e.g., missing quotes, extra commas).  Express.json() parses the body and throws an error.  The error isn't handled, causing the server to crash or respond with an unhelpful error.

//This is a common problem, but subtle variations in the invalid JSON can make it hard to find. The error messages may not always be clear about the origin of the problem, particularly if the server uses middleware that masks some of the details.