const express = require('express');
const cors = require('cors')
const app = express()
const professionalData = require('./data.json');

const PORT = process.env.port || 8080

app.use(cors())

// Endpoint to get professional data
app.get('/professional', (req, res) => {
  res.json(professionalData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
