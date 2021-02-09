const orm = require("../config/orm.js");


const burger = {
    all(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },

    create(vals, cb) {
        orm.insertOne('burgers', 'burger_name', vals, (res) => cb(res));
    },

    devour(condition, cb) {
        orm.updateOne('burgers', 'devoured = true', condition, (res) => cb(res));
    }
};

module.exports = burger;