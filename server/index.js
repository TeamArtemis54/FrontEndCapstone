// we have to import express
var express = require('express');
const path = require('path');
// create a routes file
// var router = require('./routes.js');
var app = express();
app.use(express.static(__dirname + '/../client/dist'));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/src', 'index.html'));
// })

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at localhost:${port}`)
})