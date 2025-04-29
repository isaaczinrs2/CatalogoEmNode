var mysql = require('mysql');

module.exports = function(){
        return mysql.createConnection({
        host: 'localhost',
        database: 'livraria',
        user: 'root',
        password: ''
    })
};