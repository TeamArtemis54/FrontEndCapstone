var controller = require('./controllers');
var router = require('express').Router();

// fill this out when you refactor maybe?

// connect controller methods to their corresponding routes
router.get('/products', controller.products.getProducts);
router.get('/products/:product_id', controller.products.getProductId);
router.get('/products/:product_id/styles', controller.products.getProductStyles);
router.get('/products/:product_id/related', controller.products.getRelatedProducts);

module.exports = router;