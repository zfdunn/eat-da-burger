var connection = require("./connection");

var orm = {
// ------------------------------------
// create method to select all from database
    all: function(table, cb) {
        var queryString = `SELECT * FROM ${table}`;
        console.log(queryString);
        connection.query(queryString, function(err, res){
            if (err) throw err;
            cb(res);
        });
    },
// ------------------------------------
// create method to update burgers in database
    update: function(table, objColVals, condition, cb){
        var queryString = `UPDATE ${table} SET consumed = ${objColVals} WHERE ID = ${condition}`;
        console.log(queryString);
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            };
            cb(res);
        });
    },
// ------------------------------------
// create a method to add a new burger to the database
    add: function (table, cols, vals, cb){
        var queryString = `INSERT INTO ${table} (${cols}) VALUES ('${vals[0]}', ${vals[1]})`;
        console.log(queryString);
        connection.query(queryString, function (err, res){
            if (err) {
                throw err;
            }
            else {
                cb(res);
            }
        });
    },
};

module.exports = orm;