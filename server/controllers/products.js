var models = require('../models');

module.exports = {
  getProducts: function(req, res) {
    models.products.getProducts((err, results) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        console.log(results);
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
        console.log(err);
        res.end();
      } else {
        console.log(results);
        res.send(results.data);
      }
    });
  },

  getProductStyles: function(req, res) {
    let productId = req.params.product_id;
    models.products.getProductStyles(productId, (err, results) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        console.log(results);
        res.send(results.data);
      }
    });
  },

  getRelatedProducts: function(req, res) {
    let productId = req.params.product_id;
    models.products.getRelatedProducts(productId, (err, results) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        console.log(results);
        res.send(results.data);
      }
    });
  }
};





// module.exports = {
//   products: {

//   },

//   reviews: {
//     getReviews: function() {

//     },

//     getMetaData: function() {

//     },

//     postReview: function() {
//       // post method
//     },

//     markReviewHelpful: function() {
//       // put method
//     },

//     reportReview: function() {
//       // put method
//     },

//     cart: {
//       getCart: function() {

//       },

//       addToCart: function() {

//       }
//     },

//     interactions: {
//       postInteraction: function() {

//       }
//     }
//   }

// }