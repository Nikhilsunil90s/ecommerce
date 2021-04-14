const router = require('express').Router();
const path = require('path');
const admin = require('../adminRoutes/admin');
const shopController = require('../../controllers/shopController');


router.get('/' , shopController.getHomePage);

module.exports = router;