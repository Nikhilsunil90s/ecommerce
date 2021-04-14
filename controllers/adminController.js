// to handle or control admin routes
const admin = require('../routes/adminRoutes/admin');

exports.getAddProduct =  (req,res,next) => {
    // return res.sendFile(path.join(__dirname , "../../" , "views" , "addproduct.html"));
    return res.render('layouts/addProductpage');
}

exports.postAddProduct = (req,res,next) => {
    //console.log(req.body);
    admin.Products.push(req.body);
    // res.send("Product Added!");
    res.redirect('/');
}