# Variables de entorno

## Ejemplo básico

Probaremos dos formas de utilizar las variables de entorno en `nodejs`.

1. Ejecute el comando `npm init` para crear el `package.json` y defina las variables de entorno en test, de la siguiente manera.

```json
{
 "name": "ejemplo-basico",
 "version": "1.0.0",
 "description": "Ejemplo basico de variables de entorno en nodejs",
 "main": "index.js",
 "scripts": {
 "test": "set HOST=localhost&&set PORT=8000&&node index.js"
 },
 "author": "Curso de backend",
 "license": "ISC",
}
```

2. Instale express: `npm install express --save`.
3. Cree un archivo `config.js`, en este se encontrarán las variables de entorno de nuestro proyecto y un archivo `index.js` el cual contendrá el servidor. Para ello:
   1. Abra los archivos actuales `config.js` e `index.js`.
   2. Revise el código y replique.
4. Una vez tenga el código, ejecute el programa de dos maneras.
   1. Ejecute el programa como se ha venido trabajando, mediante `node index.js`.
   2. Ejecute el programa mediante el test que se creó en el json, mediante `npm run test`.
5. Con lo anterior, mejore y personalice el programa, realice una página de inicio sencilla.

## Ejemplo con DotEnv

La libreria DotEnv nos permitirá leer estas variables desde un archivo llamado `.env`, para posteriormente cargar las variables de entorno en la variable `process.env`. Esto resulta útil cuando se tienen múltiples variables de entorno.

1. Use los archivos que previamente se crearon.
2. No se olvide de tener instalado express.
3. Instale la librería: `npm i dotenv --save`.
4. Modifique el archivo `config.js`

```javascript
// config.js
const dotenv = require('dotenv').config();
module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    HOST: process.env.HOST,
    PORT: process.env.PORT
}
```

5. Cree un archivo `.env`, esté ahora contendrá las variables de entorno.

```env
// .env
NODE_ENV=desarrollo--
HOST=127.0.0.1
PORT=8000
```

6. Ejecute: `node index.js`

Vea el código fuente en: [dotenv](.)

## Múltiples Entornos con DotEnv

Trabajaremos con dos entornos, uno de desarrollo y otro de producción.

1. Usando el ejemplo hecho con DotEnv.
2. Lea el código. No se olvide de instalar express y dotenv.
3. Modifique el archivo `.env` y llámelo `desarrollo.env`
4. Cree un archivo llamado `produccion.env` y cambiele el puerto, si lo desea cambie el host, para visualizar mejor los cambios.
5. Modifique el archivo `config.js`, con:

```javascript
// config.js
const dotenv = require('dotenv');
const path = require('path'); // el objecto path permitira cargar el archivo .env que necesitemos de acuerdo al entorno deseado.
dotenv.config({
 path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
});
module.exports = {
 NODE_ENV: process.env.NODE_ENV || 'desarrollo',
 HOST: process.env.HOST || 'localhost',
 PORT: process.env.PORT || 3000
}
```

6. Modifique el archivo `package.json`.

```json
"scripts": {
 "dev": "set NODE_ENV=desarrollo&&node index.js",
 "prod": "set NODE_ENV=produccion&&node index.js"
 },
```

7. Ejecute el programa de tres maneras.
   1. Comando `node index.js`. Observe que corre lo definido en `config.js`
   2. Comando `npm run dev`. Observe que se ejecuta el entorno de desarrollo definido en `desarrollo.env`
   3. Comando `npm run prod`. Observe que se ejecuta el entorno de producción definido en `produccion.env`
   4. Ejecute en dos terminales distintas el entorno de desarrollo y el entorno de ejecución. Si el programa quedó de manera correcta, no se generará ningún conflicto.

Como alternativa puede usar la librería `custom-env` para el manejo de variables de entorno. Instale con `npm i custom-env`. Vea el ejemplo y código fuente en: [custom-env](.). Note que los archivos seben tener la extensión `.env.dev` o `.env.prod`.

Debe configurar el `package.son` con:

```json
"scripts": {
 "dev": "set NODE_ENV=dev&&node index.js",
 "prod": "set NODE_ENV=prod&&node index.js"
 },
```

Vea el código fuente en: [fotr](.)