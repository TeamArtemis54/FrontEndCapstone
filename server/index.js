// we have to import express
var express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
var compression = require('compression');

// Path
const path = require('path');

// create a routes file
var router = require('./routes.js');


var app = express();
module.exports.app = app;

app.use(compression());
app.set('port', 3000);

app.use(bodyParser.json());

// set up our routes
app.use('/api', router);

app.use(express.static(__dirname + '/../client/dist'));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/src', 'index.html'));
// })

if(!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
