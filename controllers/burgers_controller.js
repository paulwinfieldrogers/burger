var express = require('express');

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.getAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    burger.insertBurger(req.body.burger_name, function () {
        res.redirect("/");
    });
});

router.put("/:id", function (req, res) {
    var id = req.params.id;

    console.log("id", id);

    burger.devourBurger(id, function () {
        res.redirect("/");
    });
});

module.exports = router;
