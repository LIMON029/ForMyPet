export {};

const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors');
const CLIENT_URL = require("../src/GlobalVariables");
const app = express();
const PORT = 5000;

app.use(cors({ credentials: true, origin: CLIENT_URL }));
app.use(bodyParser.json());

app.use('/api', require('./routes/index'));
app.get('/api', (req, res) => {
    res.send('Server Response Success');
});

app.use('/auth', require('./routes/Auth'));
app.use('/db', require('./routes/DB_connect'));

app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
});