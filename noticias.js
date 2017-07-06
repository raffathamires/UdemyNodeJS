//console.log('Criando um site de noticias com Nodejs');
//require = incorporar alguma biblioteca ao node
var http = require('http');

//funcoes como argumento
var server = http.createServer( function(req, res){

    var categoria = req.url;
    //response = resposta normalmente em html
    if(categoria == '/tecnologia'){
        res.end("<html><body>Noticias de tecnologia</body></html>");
    }
    else if(categoria == '/moda'){
         res.end("<html><body>Noticias de moda</body></html>");
    }
    else if(categoria == '/beleza'){
         res.end("<html><body>Noticias de beleza</body></html>");
    }
    else{
        res.end("<html><body>Portal de Noticias</body></html>");
    }
});

//porta que o server vai "escutar"
//acessar localhost:3000
server.listen(3000);