var mysql = require('mysql');
var connection;
if (process.env.JAWSDB){
    connection = mysql.createConnection(process.env.JAWSDB_ULR)
} else{
    connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'password',
        database:'TBD'
    });
};

connection.connect();
module.exports= connection;