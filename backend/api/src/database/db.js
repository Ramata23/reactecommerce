var mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecommerce'
});

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE if not exists users (id INT(11) AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), password VARCHAR(25), picture TEXT)";
    var sql = "CREATE TABLE if not exists products (id INT(11) AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), price INT(255), picture TEXT, description TEXT(255), category VARCHAR(255), user_affiliate VARCHAR (255))";
    conn.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });
module.exports = conn