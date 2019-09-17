// ------------------------------------
// required packages
var mysql = require("mysql");
var express = require("express");
// ------------------------------------
// initializing app variable to use express
var app = express();
// ------------------------------------
// establishing port
var PORT = process.env.PORT || 3000;
// ------------------------------------

// ------------------------------------
// borrowing code off classmate (start)
// ------------------------------------
// database connection variable
var connection;
if (process.env.burger_db){
    connection = mysql.createConnection(process.env.burger_db)
    }
    else {
        connection = mysql.createConnection({
            host: "localhost",
            port: 3306,
            user: "root",
            password: "password",
            database: "burger_db"
        });
    };
// ------------------------------------
    connection.connect(function (err){
    if (err){
        console.log("Connection Error: " + err.stack);
        return;
    };
    console.log("Connected as id: " + connection.threadID);
});
// ------------------------------------
// (end)

module.exports = connection;