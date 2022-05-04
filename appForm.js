const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

var path = require('path');

var arrayDati = [];

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/registrazione', (req, res) => {
    res.sendFile(path.join(__dirname + '/reg.html'));
})

app.post('/registrazione', (req, res) => {
    console.log("Ricevuta richiesta POST");
    console.log(req.body);

    arrayDati[0] = req.body.cognome;
    arrayDati[1] = req.body.nome;
    arrayDati[2] = req.body.username;
    arrayDati[3] = req.body.password;
    arrayDati[4] = req.body.email;
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/login.html'));
})

app.post('/login', (req, res) => {
    console.log(req.body);

    if (req.body.username == arrayDati[2] && req.body.password == arrayDati[3]) {
        res.sendFile(path.join(__dirname + '/sessPriv.html'));
    } else {
        res.send('Dati errati. Login non effettuato');
    }
})

app.listen(port, () => {
    console.log(`Martina app listening on port ${port}`)
})