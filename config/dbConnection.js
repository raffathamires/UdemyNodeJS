var mysql = require('mysql');

module.exports = function (){
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'r1a7f0a5',
        database : 'portal_noticias'
    });
};