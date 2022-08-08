const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 5000;
const CLIENT_URL = require("../src/GlobalVariables").CLIENT_URL;

app.use(cors({ credentials: true, origin: CLIENT_URL }));

app.use('/api', require('./routes/index'));
app.get('/api', (req, res) => {
    res.send('Server Response Success');
});

app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
});