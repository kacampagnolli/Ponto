function UsuarioDao(connection){
    this._connnection = connection;
}

UsuarioDao.prototype.authenticate = function(usuario,senha, callback) {
    this._connnection.query('SELECT ID FROM Usuarios WHERE NOME = ? AND SENHA = ?', [usuario, senha], callback);
}

UsuarioDao.prototype.exist = function(id,callback) {
    this._connnection.query('SELECT 1 FROM Usuarios WHERE ID = ?',[id],callback);
}

UsuarioDao.prototype.findById = function(id,callback) {
    this._connnection.query('SELECT * FROM Usuarios WHERE ID = ?',[id],callback);
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

module.exports = function(){
    return UsuarioDao;
}