const axios = require('axios');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
// const API = require('/Users/jinhoobong/Desktop/HackReactor_SEI/FEC/client/env/api_config.js');
const API = require('../env/api_config.js');


// MODELS: use axios
module.exports = {
  getReviews: function(params, cb) {
  console.log(API.token);
    axios({
      method: 'get',
      url: url + '/reviews/',
      headers: {
        'Authorization': API.token
      },
      params: {
        product_id: params.product_id
      }
    })
      .then((data) => {
        cb(null, data);
      })
      .catch((err) => {
        cb(err, null);
      })
  },

  getMetaData: function(params, cb) {
    axios({
      method: 'get',
      url: url + '/reviews/meta',
      headers: {
        'Authorization': API.token
      },
      params: {
        product_id: params.product_id
      }
    })
      .then((data) => {
        cb(null, data);
      })
      .catch((err) => {
        cb(err, null);
      })
  },

  addReview: function(bodyParams, cb) {
    axios({
      method: 'post',
      url: url + '/reviews',
      headers: {
        'Authorization': API.token
      },
      dataType: 'application/json',
      contentType: 'application/json',
      data: bodyParams
    })
      .then((data) => {
        cb(null, data);
      })
      .catch((err) => {
        cb(err, null);
      })
  },

  markReviewHelpful: function(review_id, cb) {
    axios({
      method: 'put',
      url: url + '/reviews/' + review_id + '/helpful',
      headers: {
        'Authorization': API.token
      }
    })
      .then((data) => {
        cb(null, data);
      })
      .catch((err) => {
        console.log(err);
        cb(err, null);
      })
  },

  reportReview: function(review_id, cb) {
    axios({
      method: 'put',
      url: url + '/reviews/' + review_id + '/report',
      headers: {
        'Authorization': API.token
      }
    })
      .then((data) => {
        cb(null, data);
      })
      .catch((err) => {
        console.log(err);
        cb(err, null);
      })
  }
};