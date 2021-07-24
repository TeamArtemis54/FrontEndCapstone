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



// create ROUTES FOLDER
// SEPARATE API'S INTO SEPARATE MODEL/CONTROLLERS??



// // PRODUCTS API
// app.get('/products', (req, res) => {
//   axios({
//     method: 'get',
//     url: url + '/products',
//     headers: {
//       'Authorization': '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'
//     }
//   })
//     .then((data) => {
//       res.send(data.data);
//     })
//     .catch((err) => {
//       // handle error better
//       console.log(err);
//     })
// })

if(!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
