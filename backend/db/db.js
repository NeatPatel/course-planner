const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: '',             // TODO update user, pass, and db
    password: '',
    database: ''
});
connection.connect();

// TODO make query functions

// INITIALIZE DATABASE (DO NOT INCLUDE IN FINAL COMMIT)

// CREATE DATABASE course_eater;

// USE course_eater;

// CREATE TABLE users (

// );


connection.end();