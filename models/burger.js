//importing the ORM for database use
var orm = require("../config/orm.js");

var burger = {
    getAll: function (cb) {
        orm.getAll(function (res) {
            cb(res);
        });
    },
    insertBurger: function (burger, cb) {
        orm.insertBurger(burger, function (res) {
            cb(res);
        });
    },
    devourBurger: function (id, cb) {
        orm.devourBurger([id], function (res) {
            cb(res);
        });
    }
};

module.exports = burger;
