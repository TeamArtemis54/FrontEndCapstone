const axios = require('axios');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
// const API = require('/Users/jinhoobong/Desktop/HackReactor_SEI/FEC/client/env/api_config.js');
const API = require('../../client/env/api_config.js');

console.log(__dirname);

module.exports = {
  getProducts: function(cb) {
    axios({
      method: 'get',
      url: url + '/products',
      headers: {
        'Authorization': API.token
      }
    })
      .then((data) => {
        cb(null, data);
      })
      .catch((err) => {
        cb(err, null);
      })
  },

  getProductId: function(product_id, cb) {
    axios({
      method: 'get',
      url: url + '/products/' + product_id,
      headers: {
        'Authorization': API.token
      }
    })
    .then((data) => {
      cb(null, data);
    })
    .catch((err) => {
      cb(err, null);
    })
  },

  getProductStyles: function(product_id, cb) {
    axios({
      method: 'get',
      url: url + '/products/' + product_id + '/styles',
      headers: {
        'Authorization': API.token
      }
    })
    .then((data) => {
      cb(null, data);
    })
    .catch((err) => {
      cb(err, null);
    })
  },

  getRelatedProducts: function(product_id, cb) {
    axios({
      method: 'get',
      url: url + '/products/' + product_id + '/related',
      headers: {
        'Authorization': API.token
      }
    })
    .then((data) => {
      cb(null, data);
    })
    .catch((err) => {
      cb(err, null);
    })
  }
};
