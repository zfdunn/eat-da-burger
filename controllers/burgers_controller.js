// ------------------------------------
// dependencies 
var express = require("express");
var burger = require("../models/burgers");
var router = express.Router();
// ------------------------------------
// create routes to display all burgers in database
    router.get("/", function(req, res){
        burger.allBurgers(function(data){
            console.log("before the variable");
            var burgerObject = {
                burgers: data
            };
            console.log(burgerObject);
            res.render("index", burgerObject);
        });
    });
// ------------------------------------
// establish route to update a burger when consumed
    router.put("/api/burgers/:id", function(req, res){
        var condition = req.params.id;
        console.log(condition);
        console.log(req.body);
// ------------------------------------
        burger.updateBurgers(req.body.consumed, condition, function(result){
            console.log(result);
            if (result.changedRows === 0){
                return res.status(200).end();
            }
            else {
                res.status(200).end();
            };
        });
    });
// ------------------------------------
// post route to add new burger
    router.post("/api/burgers", function (req, res) {
        burger.addBurgers([
            "burger_name", "consumed"
        ]);
        [req.body.name, req.body.consumed],
        function (result) {
            res.json({ id: result.insertID});

        };
    });
    
module.exports = router;