//utilizando framework express
var express = require('express');
var app = express();

//inicializando o EJS
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("secao/home");
});

app.get('/tecnologia', function(req, res){
    res.render("secao/tecnologia");
});

app.listen(3000, function(){
    console.log("Servidor rodando com Express");
});