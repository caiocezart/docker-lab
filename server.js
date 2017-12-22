'use strict';
const MongoClient = require('mongodb').MongoClient, assert = require('assert');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');

const PORT = 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  require('./app/routes')(app, database);
  app.listen(PORT, () => {
    console.log('Server running on: ' + PORT);
  });              
})