const router = require('express').Router();
const path = require('path');
const adminController = require('../../controllers/adminController');

router.get('/listProducts' , adminController.listAllProducts);

router.get('/addProduct' , adminController.getAddProduct);

router.post('/addProduct' , adminController.postAddProduct);

module.exports = router;
// exports.Products = Products;
// exports.adminRouter = router;