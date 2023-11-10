const express = require('express');
// Importamos el módulo express, que exporta una función

const app = express();
// Función principal, que a su vez tiene métodos

const puerto = process.env.PORT || 3000;
// Puerto indicado en la variable de entorno PORT, o 3000
// si la variable no está definida.

app.use(express.json());
// middleware necesario para procesar las peticiones
// POST que incluyan un cuerpo json

// Direccionamiento para  GET
app.get('/', (req, res) => {
    res.type('text/plain; charset=utf-8');
    res.send('Bienvenidos a mi página de ejemplo');
})

app.get('/about', (req, res) => {
    res.type('text/plain; charset=utf-8');
    res.send('Esto es una prueba de Express');
})

app.get('/data', (req, res) => {
    res.json("['sota', 'caballo', 'rey']");
})

app.get('/api/carta/:id', (req, res) => {
    let id = req.params.id
    res.type('text/plain; charset=utf-8');
    res.send('Me has pedido la carta ' + id);
})

app.get('/api/coords/:x/:y', (req, res) => {
    let x = req.params.x
    let y = req.params.y
    res.type('text/plain; charset=utf-8');
    res.send('Me has pedido las coordenadas ' + x + ', ' + y);
})

// Direccionamiento para  PUT
app.put('/api/object/:id', (req, res) => {
    let id = req.params.id
    res.type('text/plain; charset=utf-8');
    res.send('Me has pedido crear el objeto ' + id);
})

app.put('/api/add', (req, res) => {
    console.log('Me has enviado este objeto:');
    console.log(req.body);
    res.json(req.body);
});

// Esta llamada  debe  ser la última, error 404
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
})

// custom  500 page
app.use((err, req, res, next) => {
    console.error(err.message);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
})

app.listen(puerto, () => console.log(
    'Express iniciado en http://localhost:' + puerto + '\n' +
    'Ctrl-C para finalizar.'));
