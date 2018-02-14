var logger = require('../servicos/logger.js');
var jwt = require('jsonwebtoken');
var cfg = require("../config/config");
var auth = require('../config/auth.js')();
var _ = require("lodash");

module.exports = function(app){

app.post("/public/login", function(req, res) {
    
    req.assert("nome","Nome de usuário inválido").notEmpty();
    req.assert("senha","Senha inválida").notEmpty();
    
    var erros = req.validationErrors();
    
    if(erros){
        console.log('Erro(s) de validação encontrado(s)');
        res.status(400).send(erros);
        return;
    }
    
    var nome = req.body.nome;
    var senha = req.body.senha;
    

    var connection = app.persistencia.connectionFactory();
    var usuarioDao = new app.persistencia.UsuarioDao(connection);

    usuarioDao.authenticate(nome, senha, function(erro,resultado) {
        if(erro){
            res.status(500).send(erro);
            logger.info("Error: " + erro);
        }else{
            if (!_.isEmpty(resultado)) {
                var payload = {id: _.first(resultado).ID};
                
                var token = jwt.sign(payload, cfg.jwtSecret, {
                    expiresIn: 43200
                });

                //console.log(res.json({message: 'ok' , token: 'Bearer ' + token}))
                res.json({message: 'ok' , token: 'Bearer ' + token});
            }else {
                res.sendStatus(401);
            }
        }
    });
});

app.get("/protected/usuario", auth.authenticate(), function(req, res) { 
    var id = req.user; 
    var connection = app.persistencia.connectionFactory();
    var usuarioDao = new app.persistencia.UsuarioDao(connection);    
    usuarioDao.findById(id,function(erro,resultado){
        if(erro){
            res.status(500).send(erro);
            logger.info("Error: " + erro);
            return;
        }
        res.json(resultado);
        return;
    });
});


app.get('/usuarios',function(req, res){   
    var connection = app.persistencia.connectionFactory();
    var usuarioDao = new app.persistencia.UsuarioDao(connection);
    usuarioDao.lista(function(erro,resultado){
        if(erro){
            res.status(500).send(erro);
            logger.info("Error: " + erro);
            return;
        }
        res.json(resultado);
        return;
    });
});

app.get('/usuarios/usuario/:id',function(req, res){
    var id = req.params.id; 
    
    var memcachedCliente = app.persistencia.memcachedCliente();
    memcachedCliente.get('usuario-' + id, function (erro, retorno){
        if(erro || !retorno){
            console.log('MISS - chave não encontrada');
            var connection = app.persistencia.connectionFactory();
            var usuarioDao = new app.servicos.UsuarioDao(connection);
                
            usuarioDao.buscaPorId(id,function(erro,resultado){
                if(erro){
                    res.status(500).send(erro);
                    logger.info("Error: " + erro);
                    return;
                }
                res.json(resultado);
                return;
            });
        } else{
            res.json(retorno);
            return;
        }
    });   
});

app.delete('/usuarios/usuario/:id', function(req, res){
    var usuario = {};
    var id = req.params.id; 

    usuario.id = id;
    usuario.status = 'DESATIVADO'
       
    var connection = app.persistencia.connectionFactory();
    var usuarioDao = new app.persistencia.UsuarioDao(connection);

    usuarioDao.deleta(usuario, function(erro){
        if(erro){
            res.status(500).send(erro);
            logger.info("Error: " + erro);
            return;
        }
        var memcachedCliente = app.servicos.memcachedCliente();
        memcachedCliente.set('usuario-' +usuario.id,{'id':usuario.id },
            6000,function(erro){
                console.log('nova chave adicionada ao cache: usuario-' + usuario.id);
        });
        res.status(204).send(usuario);
        return;
    });


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

    usuario.status = 'ATIVO';
    usuario.date = new Date;

    var connection = app.persistencia.connectionFactory();
    var usuarioDao = new app.persistencia.UsuarioDao(connection);

    usuarioDao.salva(usuario, function(erro, resultado) {
        if(erro){
            res.status(500).send(erro);
            logger.info("Error: " + erro);
        }else{
        usuario.id = resultado.insertId;
        console.log('usuario cadastrado');

        var memcachedCliente = app.servicos.memcachedCliente();
        memcachedCliente.set('usuario-' +usuario.id,{'id':usuario.id },
            6000,function(erro){
                console.log('nova chave adicionada ao cache: usuario-' + usuario.id);
        });


        res.location('/usuario/usuarios/' + usuario.id);
        
        var response ={
            dados_do_usuario: usuario,
            links:[
                {
                    href:"http://localhost:3000/usuarios/usuario/"
                    + usuario.id,
                    rel:"DESATIVAR",
                    method:"DELET"
                }
            ]
        }

        res.status(201).json(response);
        return;
        }
    });
});

}