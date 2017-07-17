module.exports.iniciaChat = function(application, req, res){

    var dadosForm = req.body;

    req.assert('apelido', 'Nome/Apelido é obrigatório.').notEmpty();
    req.assert('apelido', 'Nome/Apelido deve conter entre 3 e 15 caracteres.').len(3, 15);

    var errors = req.validationErrors();

    if(errors){
        res.render("index", {validacao : errors, dadosForm : dadosForm})
        return;
    }

    application.get('io').emit(
        'msgParaCliente',
        {apelido : dadosForm.apelido, mensagem : ' acabou de entrar no chat.'}
    );

    res.render("chat", {dadosForm : dadosForm});
}