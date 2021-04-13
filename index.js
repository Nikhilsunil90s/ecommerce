const express = require('express');
const admin = require('./routes/adminRoutes/admin');
const user = require('./routes/userRoutes/user');

const app = express();

app.set('view engine' , 'ejs');
app.set('views' , 'views');

app.use(express.urlencoded({extended: false}));

app.use(express.static('public'));

app.use('/admin' , admin.adminRouter);
app.use(user);


app.listen(3000);

