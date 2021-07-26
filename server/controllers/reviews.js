var models = require('../models');
const bodyParser = require('body-parser');

// CONTROLLER:

module.exports = {
  getReviews: function(req, res) {
    let params = {
      product_id: req.params.product_id
    }
    models.reviews.getReviews(params, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.send(results.data);
      }
    })
  },

  getMetaData: function(req, res) {
    let params = {
      product_id: req.params.product_id
    }
    models.reviews.getMetaData(params, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.send(results.data);
      }
    })
  },

  addReview: function(req, res) {
    let params = req.body;
    models.reviews.addReview(params, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.send(results.data);
      }
    })
  },

  markReviewHelpful: function(req, res) {
    let reviewId = req.params.review_id;
    models.reviews.markReviewHelpful(reviewId, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.send(results.data);
      }
    })
  },

  reportReview: function(req, res) {
    let reviewId = req.params.review_id;
    models.reviews.reportReview(reviewId, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.send(results.data);
      }
    })
  }
}