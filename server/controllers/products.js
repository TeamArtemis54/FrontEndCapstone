var models = require('../models');

module.exports = {
  getProducts: function(req, res) {
    models.products.getProducts((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.send(results.data);
      }
    });
  },

  getProductId: function(req, res) {
    // somehow pass an id in
    // console.log(req.params);
    let productId = req.params.product_id;
    models.products.getProductId(productId, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.send(results.data);
      }
    });
  },

  getProductStyles: function(req, res) {
    let productId = req.params.product_id;
    models.products.getProductStyles(productId, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.send(results.data);
      }
    });
  },

  getRelatedProducts: function(req, res) {
    let productId = req.params.product_id;
    models.products.getRelatedProducts(productId, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.send(results.data);
      }
    });
  }
};
