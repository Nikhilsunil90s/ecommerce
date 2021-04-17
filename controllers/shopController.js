// const products = require('../routes/adminRoutes/admin').Products;
const Product = require('../models/product');
// to handle or control general routes
exports.getHomePage = (req,res,next) => {
    // console.log(admin.Products);
    // return res.sendFile(path.join(__dirname , '../../' , 'views' , 'home.html'));
    const products = Product.fetchAllProducts();
    console.log(products);
    return res.render('layouts/home' , {
        products: products,
        isAdmin: false,
    });
}


exports.getProductDetails = (req,res,next) => {
    id = req.params.prodId
    console.log(typeof(id));
    const prods = Product.fetchById(id);
    res.render('layouts/productdetails' , {
        product: prods[0]
    })
}