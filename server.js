'use strict';
//const MongoClient    = require('mongodb').MongoClient;
const express = require('express');

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
    res.send('The service is running!');
})

app.listen(PORT, () => {
  console.log('Server running on: ' + PORT);
});
