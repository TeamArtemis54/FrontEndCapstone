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

  // ADD TO CART NOT WORKING - the way that I'm testing is incorrect maybe?
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