export {};

const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors');
const V = require("../src/GlobalVariables");
const app = express();
const PORT = 5000;

app.use(cors({ credentials: true, origin: V.CLIENT_URL }));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.send('Server Response Success');
});

app.use('/api', require('./routes/Api'));
app.use('/auth', require('./routes/Auth'));
app.use('/db', require('./routes/DB_connect'));
app.use('/file', require('./routes/FileManage'));

app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
});