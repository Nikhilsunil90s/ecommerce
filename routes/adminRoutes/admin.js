const router = require('express').Router();
const path = require('path');
const Products = [];

router.get('/addProduct' , (req,res,next) => {
    return res.sendFile(path.join(__dirname , "../../" , "views" , "addproduct.html"));
});

router.post('/addProduct' , (req,res,next) => {
    //console.log(req.body);
    Products.push(req.body);
    // res.send("Product Added!");
    res.redirect('/');
})

//module.exports = router;
exports.Products = Products;
exports.adminRouter = router;