const connection = require("./connection");

const questionMarks = (num) => {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
};

const convertObj = (ob) => {
    const arr = [];

    for (const key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = `'${value}'`;
            }
            arr.push(`${key}=${value}`);
        }
    }
    return arr.toString();
};

const orm = {
    selectAll(tableInput, cb) {
        const queryString = `SELECT * FROM ${tableInput}`;
        connection.query(queryString, (err, results) => {
            if (err) throw err;
            cb(results);
        })
    },
    insertOne(table, cols, vals, cb) {
        let queryString = `INSERT INTO ${table}`;

        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += questionMarks(vals.length);
        queryString += ') ';

        console.log(queryString);

        connection.query(queryString, vals, (err, results) => {
            if (err) throw err;
            console.log(results);
            cb(results);
        })
    },
    updateOne(table, cols, condition, cb) {
        let queryString = `UPDATE ${table}`;

        queryString += ' SET ';
        queryString += cols;
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, (err, results) => {
            if (err) throw err;
            cb(results);
        })
    };
};

UPDATE burgers SET devoured WHERE id = req.params.id

module.exports = orm;