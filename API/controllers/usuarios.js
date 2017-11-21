
module.exports = function(app){
app.get('/usuarios',function(req, res){
    console.log('Recebida requisicao de teste na porta 3000.');
    res.send('OK.');
});

app.post('/usuarios/usuario',function(req, res){

    req.assert("nome","Nome de usuário inválido").notEmpty();
    req.assert("senha","Senha inválida").notEmpty();

    var erros = req.validationErrors();

    if(erros){
        console.log('Erros de validacao encontrados');
        res.status(400).send(erros);
        return;
    }

    var usuario = req.body;
    console.log('inserindo um novo usuario');

    usuario.status = 'CRIADO';
    usuario.date = new Date;

    var connection = app.persistencia.connectionFactory();
    var usuarioDao = new app.persistencia.UsuarioDao(connection);

    usuarioDao.salva(usuario, function(erro, resultado) {
        if(erro){
            console.log('Erro ao inserir no banco:' + erro);
            res.status(500).send(erro);
        }else{
        console.log('usuario cadastrado');
        res.location('/usuario/usuarios/' + resultado.insertId);
        res.status(201).json(usuario);
        }
    });
});

}