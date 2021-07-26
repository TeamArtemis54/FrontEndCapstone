const axios = require('axios');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
const API = require('/Users/jinhoobong/Desktop/HackReactor_SEI/FEC/client/env/api_config.js');

// MODELS: use axios
module.exports = {
  getCart: function(cb) {
    axios({
      method: 'get',
      url: url + '/cart',
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

  addToCart: function(bodyParams, cb) {
    axios({
      method: 'post',
      url: url + '/cart',
      headers: {
        'Authorization': API.token
      },
      contentType: 'application/json',
      dataType: 'application/json',
      data: bodyParams.sku_id
    })
      .then((data) => {
        cb(null, data);
      })
      .catch((err) => {
        cb(err, null);
      })
  }
};