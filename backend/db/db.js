const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: '',             // TODO update user, pass, and db
    password: '',
    database: ''
});
connection.connect();

// TODO make query functions

connection.end();