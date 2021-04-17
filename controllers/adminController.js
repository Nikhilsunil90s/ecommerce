// to handle or control admin routes
const admin = require('../routes/adminRoutes/admin');
const Product = require('../models/product');

exports.listAllProducts = (req,res,next) => {
    const products = Product.fetchAllProducts();
    return res.render('layouts/home' , {
        isAdmin: true,
        products: products,
    })
}


exports.getAddProduct =  (req,res,next) => {
    // return res.sendFile(path.join(__dirname , "../../" , "views" , "addproduct.html"));
    return res.render('layouts/addProductpage');
}

exports.postAddProduct = (req,res,next) => {
    //console.log(req.body);
    // admin.Products.push(req.body);
    // res.send("Product Added!");
    // const name = req.body.prodName;
    const aproduct = new Product(req.body.prodName, req.body.prodPrice);
    aproduct.save();
    res.redirect('/');
}