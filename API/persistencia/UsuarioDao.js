function UsuarioDao(connection){
    this._connnection = connection;
}

UsuarioDao.prototype.salva = function(usuario,callback) {
    this._connnection.query('INSERT INTO usuarios SET ?',usuario,callback);
}

UsuarioDao.prototype.lista = function(callback) {
    this._connnection.query('SELECT * FROM usuarios',callback);
}

UsuarioDao.prototype.buscaPorId = function(id,callback) {
    this._connnection.query('select * from usuario where id = ?',[id],callback);
}

module.exports = function(){
    return UsuarioDao;
}