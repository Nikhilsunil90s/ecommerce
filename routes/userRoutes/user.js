const router = require('express').Router();
const path = require('path');
const admin = require('../adminRoutes/admin');


router.get('/' , (req,res,next) => {
    console.log(admin.Products);
    // return res.sendFile(path.join(__dirname , '../../' , 'views' , 'home.html'));
    return res.render('home' , {
        products: admin.Products
    });
});

module.exports = router;