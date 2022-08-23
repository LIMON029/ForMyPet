export {};

const express = require('express');
const { findById, findAll } = require("../db_manage/db_utils");

const router = express.Router();

router.post('/findById', (req, res) => {
    const func = async () => {
        const result = await findById(req.body.id);
        res.json(result);
    }
    func(); 
});

router.post('/findAll', (req, res) => {
    const func = async () => {
        const result = await findAll();
        res.json(result);
    }
    func();
});
 
export = router;