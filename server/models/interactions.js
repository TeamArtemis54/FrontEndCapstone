const axios = require('axios');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
// const API = require('/Users/jinhoobong/Desktop/HackReactor_SEI/FEC/client/env/api_config.js');
const API = require('../../client/env/api_config.js');

// MODELS: use axios
module.exports = {
  postInteraction: function(params, cb) {
    axios({
      method: 'POST',
      url: url + '/interactions',
      headers: {
        'Authorization': API.token
      },
      dataType: 'application/json',
      data: params
    })
      .then((data) => {
        cb(null, data);
      })
      .catch((err) => {
        cb(err, null);
      })
  }
};