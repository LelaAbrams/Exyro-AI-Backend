const express = require('express');
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Simple GET route to check the server's health
app.get('/api/health', (req, res) => {
  res.json({ status: 'API is running smoothly' });
});

// POST route to handle form submissions
app.post('/api/submit-form', (req, res) => {
  const { name, email } = req.body;
  res.json({ message: `Form submitted successfully! Name: ${name}, Email: ${email}` });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
