export {};

const express = require('express');
const { findById, findAll, findUserById, addMemo, deleteMemo } = require("../utils/DB_utils.ts");

const router = express.Router();

router.post('/findUserById', (req, res) => {
    const func = async () => {
        const result = await findUserById(req.body.id);
        res.json(result);
    }
    func(); 
});

router.post('/findById', (req, res) => {
    const func = async () => {
        const result = await findById(req.body.id);
        res.json(result);
    }
    func(); 
});

router.post('/add', (req, res) => {
    const func = async () => {
        const result = await addMemo();
        res.json(result);
    }
    func();
});

router.post("/deleteMemo", (req, res) => {
    const func = async () => {
        const result = await deleteMemo();
        res.json({status: result});
    }
    func();
})

router.post('/findAll', (req, res) => {
    const func = async () => {
        const result = await findAll();
        res.json(result);
    }
    func();
});
 
export = router;