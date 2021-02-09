const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get('/', (req, res) => {
    burger.all((data) => {
        const burgerObj = {
            burgers: data,
        };
        console.log(burgerObj);
        res.render('index', burgerObj);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create([req.body], (result) => {
        res.json({ id: result.insertedId });
    });
});

router.put('api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;

    console.log('condition', condition);

    burger.devour(condition, (results) => {
        if (results.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;