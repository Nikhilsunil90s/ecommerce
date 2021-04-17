const express = require('express');
const adminRoutes = require('./routes/adminRoutes/admin');
const userRoutes = require('./routes/userRoutes/user');

const app = express();

app.set('view engine' , 'ejs'); // template engine
app.set('views' , 'views');

app.use(express.urlencoded({extended: false})); // body-parser

app.use(express.static('public')); // public content --- css, images, etc.

app.use('/admin' , adminRoutes); // Routes Here 
app.use(userRoutes);

app.listen(3000);

