// we have to import express
var express = require('express');
// create a routes file
// var router = require('./routes.js');
var app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at localhost:${3000}`)
})




