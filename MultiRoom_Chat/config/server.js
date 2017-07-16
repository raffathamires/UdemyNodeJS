//importando módulo express
var express = require('express');

//importando módulo consign
var consign = require('consign');

//importando módulo body-parser
var bodyParser = require('body-parser')

//importando módulo express-validator
var expressValidator = require('express-validator');

//inicializando objeto express
var app = express();

//setar as variaveis 'view engine' e 'views do express
app.set('view engine', 'ejs');
app.set('views', './app/views');

//configurar o middleware express static
app.use(express.static('./app/public'))

//configurar o middleware bodyparser
app.use(bodyParser.urlencoded({extended : true}));

//configurar o middleware expressValidator
app.use(expressValidator());

//configura os autoloads do consign (rotas), dos models e dos controllers para o objt app
consign()
    .include('./app/routes')
    .then('./app/models')
    .then('./app/controllers')
    .into(app);

// exportar o objeto app
module.exports = app;