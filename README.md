# Ejercicios asociados a Node.js

## Node.js

* [Node introductorio](.): callbacks, http, servers.
* [Sistemas de módulos](.): ESM, commonjs.
* [Modules](.): local, built-in, external.
* [Json](.): uso básico de json.
* [Eventos y buffers](.): eventos y buffers.
* [Variable de entorno](.): variables de entorno: simple, con DotEnv, múltiple.

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