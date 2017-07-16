var mysql = require('mysql');

var connMySQL = function(){
    //console.log("Conexao com o bd foi estabelecida");
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'r1a7f0a5',
        database : 'portal_noticias'
    });
}

module.exports = function (){
    //console.log("Autoload carregou módulo de conexao com o bd");
    return connMySQL;
};