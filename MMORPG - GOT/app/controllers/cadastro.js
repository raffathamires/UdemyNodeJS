module.exports.cadastro = function(application, req, res){
    res.render('cadastro', {validacao: '', dadosForm: ''});
}

module.exports.cadastrar = function(application, req, res){
    var dadosForm = req.body;

    req.assert('nome', 'Nome não pode ser vazio').notEmpty();
    req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
    req.assert('senha', 'Senha não pode ser vazia').notEmpty();
    req.assert('casa', 'Você deve escolher uma casa').notEmpty();

    var error = req.validationErrors();

    if(error){
        res.render('cadastro', {validacao: error, dadosForm});
        return;
    }
    res.send('podemos cadastrar');
}