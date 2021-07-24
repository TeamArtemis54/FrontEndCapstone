// we have to import express
var express = require('express');
const axios = require('axios');

// Path
const path = require('path');

// create a routes file
// var router = require('./routes.js');


var app = express();
app.use(express.static(__dirname + '/../client/dist'));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/src', 'index.html'));
// })

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

// create ROUTES FOLDER
// SEPARATE API'S INTO SEPARATE MODEL/CONTROLLERS??
// WATCH DATABASES VIDEO TO SEE WHAT THE PROPER WAY IS



// PRODUCTS API
app.get('/products', (req, res) => {
  axios({
    method: 'get',
    url: url + '/products',
    headers: {
      'Authorization': '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'
    }
  })
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => {
      // handle error better
      console.log(err);
    })
})

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at localhost:${port}`)
})