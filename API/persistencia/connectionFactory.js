var mysql = require('mysql');

function createDBConnection(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'q1w2e3r4',
        database: 'Ponto'
    });
}

module.exports = function(){
    return createDBConnection;
}