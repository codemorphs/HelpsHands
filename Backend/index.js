const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const loginBackend = require('./loginbackend');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3010;

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('databases/HelpHands.db');

// Login endpoint
app.post('/login', loginBackend(db));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
