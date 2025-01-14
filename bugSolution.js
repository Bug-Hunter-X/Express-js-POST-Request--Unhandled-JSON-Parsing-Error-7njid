const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  try {
    const data = req.body;
    // ... process data ...
    res.status(201).json({ message: 'Data received' });
  } catch (error) {
    if (error instanceof SyntaxError && error.message.startsWith('Unexpected token')) {
      // Handle invalid JSON specifically
      res.status(400).json({ error: 'Invalid JSON in request body' });
    } else {
      // Handle other errors
      console.error('Error processing request:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});
