const products = require('../routes/adminRoutes/admin').Products;
// to handle or control general routes
exports.getHomePage = (req,res,next) => {
    // console.log(admin.Products);
    // return res.sendFile(path.join(__dirname , '../../' , 'views' , 'home.html'));
    return res.render('layouts/home' , {
        products: products
    });
}