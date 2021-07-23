// we have to import express
var express = require('express');
// create a routes file
// var router = require('./routes.js');
var app = express();
app.use(express.static(__dirname + '/../client/dist'));

// app.get('/', (req, res) => {
//   res.send('Team Artemis - FEC Project')
// })

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at localhost:${3000}`)
})