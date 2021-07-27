const axios = require('axios');

const getStyle = (style = '17070', callback) => {

  const instance = axios.create({
    baseURL: 'https://app-hrsei-api.herokuapp.com/api/',
    headers: {'Authorization': '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'}
  });

  instance.get(`fec2/hr-rfp/products/${style}/styles`)
    .then(response => {
//    console.log(response.data);
    callback(null,response.data)
    })
    .catch(function (err) {
    console.log(err);
    callback(err, null)

    })
    .then(function () {
      //
    });

}

getStyle()

module.exports.getStyle = getStyle
