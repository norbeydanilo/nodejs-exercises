//servidor
const config = require('./config.js');
const express = require('express');
const app = express();

console.log(`NODE_ENV=${config.NODE_ENV}`);
console.log(`HOST=${config.HOST}`);
console.log(`PORT=${config.PORT}`);

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.send("<h1>Hola mundo!</h1>");
});

app.listen(config.PORT, config.HOST, function () {
    console.log(`El servidor se está ejecutando en http://${config.HOST}:${config.PORT}`);
});