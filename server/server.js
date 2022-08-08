const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 5000;

app.use(cors({ credentials: true, origin: process.env.REACT_APP_CLIENT_URL }));

app.use('/api/test', require('./routes/index'));
app.get('/api/', (req, res) => {
    res.send('Server Response Success');
});

app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
});