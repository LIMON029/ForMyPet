const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 5000;

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use('/test', require('./routes/index'));
app.get('/', (req, res) => {
    res.send('Server Response Success');
});

app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
});