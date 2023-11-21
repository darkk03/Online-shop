const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle all other requests by serving the 'index.html' file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
