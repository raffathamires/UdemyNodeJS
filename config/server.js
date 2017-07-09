//utilizando framework express
var express = require('express');
var app = express();

//inicializando o EJS
app.set('view engine', 'ejs');

app.set('views', './app/views');

module.exports = app;