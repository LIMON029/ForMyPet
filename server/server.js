const express = require("express");
const app = express();
const PORT = 5000;

app.use('/test', require('./routes/index'));
app.get('/', (req, res) => {
    res.send('Server Response Success');
})

app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
})