var orm = require("../config/orm");

var burgers = {
    allBurgers: function(cb){
        orm.all("burgers", function (res){
            cb(res);
        });
    },
// ------------------------------------
// borrowed classmates code (start)
    updateBurgers: function(objColVals, condition, cb){
        orm.update("burgers", objColVals, condition, function (res){
            cb(res);
        });
    },
// ------------------------------------
// (end)
    addBurgers: function (cols, vals, cb) {
        orm.add("burgers", cols, vals, function(res){
            cb(res);
        });
    },
};

module.exports = burgers;