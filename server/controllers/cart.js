var models = require('../models');

// CONTROLLER:

module.exports = {
  getCart: function(req, res) {
    models.cart.getCart((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.send(results.data);
      }
    })
  },

  addToCart: function(req, res) {
    let bodyParams = req.body;
    models.cart.addToCart(bodyParams, (err, results) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(results.data);
      }
    })
  }
};