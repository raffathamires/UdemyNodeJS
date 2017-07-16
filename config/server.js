//utilizando framework express
var express = require('express');

//utilizando o consign
var consign = require('consign');

//utilizando body-parser
var bodyParser = require('body-parser')

//chamada do express
var app = express();

//inicializando o EJS
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended : true}));

consign()
    .include('./app/routes')
    .then('./config/dbConnection.js')
    .then('./app/models')
    .into(app);

module.exports = app;