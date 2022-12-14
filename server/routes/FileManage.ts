export {};

const express = require('express');
const fs = require('fs');
const path = require('path');
const { upload } = require('../utils/FileUtil');

const router = express.Router();

fs.readdir('images', (error) => {
    if(error) {
        fs.mkdirSync('../server/images');
        console.log('make dir');
    }
})

router.post('/upload', upload.single('img'), (req, res) => {
    console.log(req.file);
    res.json({url: `uploads/${req.file.filename}`});
});

module.exports = router;