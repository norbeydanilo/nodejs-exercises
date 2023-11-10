# Ejercicios asociados a Node.js

## Node.js

* [Node introductorio](https://github.com/norbeydanilo/nodejs-exercises/tree/main/node-js/node-I): callbacks, http, servers.
* [Sistemas de módulos](https://github.com/norbeydanilo/nodejs-exercises/tree/main/node-js/sistemas-de-modulos): ESM, commonjs.
* [Modules](https://github.com/norbeydanilo/nodejs-exercises/tree/main/node-js/modules): local, built-in, external.
* [Json](https://github.com/norbeydanilo/nodejs-exercises/tree/main/node-js/json): uso básico de json.
* [Eventos y buffers](https://github.com/norbeydanilo/nodejs-exercises/tree/main/node-js/eventos-buffer): eventos y buffers.
* [Variable de entorno](https://github.com/norbeydanilo/nodejs-exercises/tree/main/node-js/variables-entorno): variables de entorno: simple, con DotEnv, múltiple.

## Express

**Express.js** es un pequeño marco de trabajo que se ejecuta sobre la funcionalidad del servidor web de Node.js para simplificar sus APIs y agregar nuevas características útiles. Es el marco de trabajo web más popular para Node.js. Está diseñado para construir aplicaciones web y APIs y facilita la organización de la funcionalidad de tu aplicación con middleware y enrutamiento.

Para instalar Express.js con npm, puedes seguir estos pasos:

1. **Crea un directorio para tu aplicación** y haz de ese tu directorio de trabajo.
```bash
$ mkdir myapp
$ cd myapp
```
2. Usa el comando `npm init` para crear un archivo `package.json` para tu aplicación.
```bash
$ npm init
```
3. Ahora instala Express en el directorio de tu aplicación y guárdalo en la lista de dependencias.
```bash
$ npm install express
```
Para instalar Express temporalmente y no agregarlo a la lista de dependencias, puedes usar la opción `--no-save`.
```bash
$ npm install express --no-save
```
Por defecto, con la versión npm 5.0+ `npm install` agrega el módulo a la lista de dependencias en el archivo `package.json`.

### Programas

* [Hola mundo express](https://github.com/norbeydanilo/nodejs-exercises/tree/main/express/express-01): ejemplo inicial de server.
* [Ejemplo con data local](https://github.com/norbeydanilo/nodejs-exercises/tree/main/express/express-02): ejemplo tomado del [curso CS142 (Spring 2023)](https://web.stanford.edu/class/cs142/lectures.html) de la Universidad de Stanford.
* [Ejemplo direccionamiento sencillo](https://github.com/norbeydanilo/nodejs-exercises/tree/main/express/express-03).
* [Ejemplo recursos estáticos](https://github.com/norbeydanilo/nodejs-exercises/tree/main/express/express-04).
* [Introducción con Nodemon](https://github.com/norbeydanilo/nodejs-exercises/tree/main/express/nodemon-01).
* [Más ejemplos de servidores](https://github.com/norbeydanilo/nodejs-exercises/tree/main/express/server-02): routing, múltiples ficheros para rutas.
* [Otro ejemplo recursos estaticos](https://github.com/norbeydanilo/nodejs-exercises/tree/main/express/estaticos-03).