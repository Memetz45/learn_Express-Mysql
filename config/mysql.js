const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password#45',
    database: 'eduwork-cruds'
});

module.exports = connection;