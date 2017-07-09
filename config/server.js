//utilizando framework express
var express = require('express');

//utilizando o consign
var consign = require('consign');

//chamada do express
var app = express();

//inicializando o EJS
app.set('view engine', 'ejs');
app.set('views', './app/views');

consign()
    .include('./app/routes')
    .then('./config/dbConnection.js')
    .then('./app/models')
    .into(app);

module.exports = app;