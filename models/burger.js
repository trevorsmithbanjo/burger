const orm = require("../config/orm.js");


const burger = {
    all(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },

    create(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, (res) => cb(res));
    },

    devour(objColsVals, condition, cb) {
        orm.updateOne('burgers', objColsVals, condition, (res) => cb(res));
    }
};

module.exports = burger;