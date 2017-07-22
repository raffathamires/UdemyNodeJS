//importar o mongodb
var mongo = require('mongodb');

var connMongoDB = function(){
    console.log('entrou na funcao de conexao');
    var db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost', //string contendo o endereço do servidor
            '27017', //porta de conexão
            {}
        ),
        {}
    );

    return db;
}

module.exports = function(){
    return connMongoDB;
}