const axios = require('axios');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

module.exports = {
  getProducts: function(cb) {
    axios({
      method: 'get',
      url: url + '/products',
      headers: {
        'Authorization': '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'
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
        'Authorization': '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'
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
        'Authorization': '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'
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
        'Authorization': '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'
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
