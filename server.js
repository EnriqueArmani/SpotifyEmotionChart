const express = require('express'),
      expressVue = require("express-vue"),
      app = express();

let routes = require('./routes'),
    path = require('path');

app.set('view engine', 'ejs');
app.set('views', [
    path.join(__dirname, 'views'),
    path.join(__dirname, 'views/signedinin')
]);

app.use('/', routes);
app.use('', express.static('public'));


app.listen(3000, () => console.log('App runing on 3000'))