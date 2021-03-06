const express = require('express');
const path = require('path');

//Initializations
const app = express();
const port = 3000;
const generadorCodQR = require('./public/js/generador');

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/generateQR', async(req, res) => {
    const result = await generadorCodQR(req.query.link);
    res.send(result == null ? '' : result);
});

app.listen(port, () => {
    console.log('Listening port ', port);
});