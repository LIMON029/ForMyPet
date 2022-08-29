export {};

const { findAll } = require("../utils/DB_utils.ts");

const express = require('express');
const router = express.Router();

router.post('/getMemos', (req, res) => {
    const func = async () => {
        const result = await findAll();
        res.json(result);
    }
    func(); 
});

router.get('/test', (req, res) => {
    res.send({test: "this is test!!"});
});

export = router;