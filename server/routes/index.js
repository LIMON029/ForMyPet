const express = require('express');
const router = express();
 
router.get('/', (req, res) => {
    res.send({test: "this is test!!"});
});
 
module.exports = router;