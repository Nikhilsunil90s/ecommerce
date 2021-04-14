const router = require('express').Router();
const path = require('path');
const Products = [];
const adminController = require('../../controllers/adminController');

router.get('/addProduct' , adminController.getAddProduct);

router.post('/addProduct' , adminController.postAddProduct);

//module.exports = router;
exports.Products = Products;
exports.adminRouter = router;