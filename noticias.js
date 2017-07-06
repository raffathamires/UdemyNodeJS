//console.log('Criando um site de noticias com Nodejs');
//require = incorporar alguma biblioteca ao node
var http = require('http');

//funcoes como argumento
var server = http.createServer( function(req, res){
    //resposta normalmente em html
    res.end("<html><body>Portal de Noticias</body></html>");


});

//porta que o server vai "escutar"
//acessar localhost:3000
server.listen(3000);