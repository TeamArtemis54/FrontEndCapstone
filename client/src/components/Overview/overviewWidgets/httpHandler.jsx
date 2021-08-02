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

const getProduct = (style = '17070', callback) => {

  const instance = axios.create({
    baseURL: 'https://app-hrsei-api.herokuapp.com/api/',
    headers: {'Authorization': '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'}
  });

  instance.get(`fec2/hr-rfp/products/${style}`)
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

//getStyle()

module.exports = {
  getStyle: getStyle,
  getProduct: getProduct
}
