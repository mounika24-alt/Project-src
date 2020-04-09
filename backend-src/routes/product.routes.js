const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');

console.log("router hit");
// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);
router.post('/create', product_controller.product_create);
//router.get('/:id', product_controller.product_details);

//exp

console.log("route hit");
module.exports = router;


