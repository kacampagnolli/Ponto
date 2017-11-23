function UsuarioDao(connection){
    this._connnection = connection;
}

UsuarioDao.prototype.salva = function(usuario,callback) {
    this._connnection.query('INSERT INTO usuarios SET ?',usuario,callback);
}

UsuarioDao.prototype.deleta = function(usuario,callback) {
    this._connnection.query('UPDATE usuarios SET status = ? WHERE id = ?',[usuario.status,usuario.id],callback);
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