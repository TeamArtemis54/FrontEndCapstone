// we have to import express
var express = require('express');
const axios = require('axios');

// Path
const path = require('path');

// create a routes file
var router = require('./routes.js');


var app = express();
module.exports.app = app;

app.set('port', 3000);

// set up our routes
app.use('/api', router);

app.use(express.static(__dirname + '/../client/dist'));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/src', 'index.html'));
// })

// GIT TOKEN : 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

// create ROUTES FOLDER
// SEPARATE API'S INTO SEPARATE MODEL/CONTROLLERS??

if(!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
