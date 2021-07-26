var controller = require('./controllers');
var router = require('express').Router();

// fill this out when you refactor maybe?

// connect controller methods to their corresponding routes
// FOR PRODUCTS API
router.get('/products', controller.products.getProducts);
router.get('/products/:product_id', controller.products.getProductId);
router.get('/products/:product_id/styles', controller.products.getProductStyles);
router.get('/products/:product_id/related', controller.products.getRelatedProducts);

// FOR INTERACTIONS API
router.post('/interactions', controller.interactions.postInteraction);

// FOR REVIEWS API
router.get('/reviews/:product_id', controller.reviews.getReviews);
router.get('/reviews/meta/:product_id', controller.reviews.getMetaData);
router.post('/reviews', controller.reviews.addReview);
router.put('/reviews/:review_id/helpful', controller.reviews.markReviewHelpful);
router.put('/reviews/:review_id/report', controller.reviews.reportReview);

// FOR CART API
router.get('/cart', controller.cart.getCart);
router.post('/cart', controller.cart.addToCart);

module.exports = router;