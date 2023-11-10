const express = require('express');
const app = express();
const puerto = process.env.PORT || 3000;
const home = process.env.HOME || __dirname;
const path = require('path');
// Importamos el módulo path

app.use(express.static(__dirname));

dir_raiz = path.join(home, "www/site01");
// Construye ˜/www/site01

app.use(express.static(dir_raiz))
// Sirve todos los ficheros del directorio raiz

// Ahora  haríamos las llamadas a app.use para  tratar los
// errores 404 y 500, así  como la llamada  a app.listen(),
// de  la forma  habitual.

app.get('/', (req, res) => {
    res.sendFile(path.join(dir_raiz, 'holamundo.html'));
});
// para  '/', sirve ˜/www/site01/holamundo.html

app.use(express.static(dir_raiz))
// Sirve todos los ficheros del directorio raiz

app.listen(puerto, () => console.log(
    'Express iniciado en http://localhost:' + puerto + '\n' +
    'Ctrl-C para finalizar.'));