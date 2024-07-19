// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const citizens = [];

app.post('/api/citizens', (req, res) => {
  const newCitizen = req.body;
  citizens.push(newCitizen);
  res.status(205).json(newCitizen);
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
