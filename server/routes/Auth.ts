export {};

const express = require('express');
const K = require('../../src/GlobalVariables');
const { unlink, getToken } = require('./KakaoUtils');

const router = express.Router();

router.get('/oauth', (req, res) => {
    if(req.query.code) {
        getToken(req.query.code);
        res.send({success: 0});
    }
});

router.get('/unlink', (req, res) => {
    const next = async () => {
        const result = await unlink(K.MY_KAKAO_ID);
        res.send({result: result});
    }
    next();
});

router.post('/getJwtToken', (req, res) => {
    
});
 
export = router;