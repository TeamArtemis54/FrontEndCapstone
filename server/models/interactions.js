const axios = require('axios');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
const API = require('/Users/jinhoobong/Desktop/HackReactor_SEI/FEC/client/env/api_config.js');

// MODELS: use axios
module.exports = {
  postInteraction: function(cb, params) {
    axios({
      method: 'POST',
      url: url + '/interactions',
      headers: {
        'Authorization': API.token
      },
      dataType: 'application/json',
      data: {
        'element': params[0],
        'widget': params[1],
        'time': params[2],
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