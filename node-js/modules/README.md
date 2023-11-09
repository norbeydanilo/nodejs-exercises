# Módulos y NPM

## Módulos Built-in

Son los módulos nativos de la API de Node.js. No hace falta que se instalen, ya que vienen incluidos por defecto con Node.js. Algunos módulos son:

- Console
- Timers
- os
- path
- HTTP

## NPM

Es el administrador de paquetes predeterminado para el tiempo de ejecución de JavaScript Node.js. NPM consiste de dos partes principales: una herramienta CLI (interfaz de línea de comandos) para la publicación y descarga de paquetes, y un repositorio en línea que alberga paquetes de JavaScript.

## Fundamentos básicos de JSON

Antes de trabajar con npm, se darán unos fundamentos básicos de json, los cuales sirven para almacenar objetos de javascript como texto, útil para la comunicación entre el servidor y el aplicativo.

1. Primero crearemos un archivo con extensión .json.
2. Abra los archivos `curso.json` y `demo-json.js`.
3. Ejecútelo.
4. Según lo anterior haga:
   1. Un json con información de un animal que contenga mínimo cinco propiedades e imprímala desde un archivo javascript.
   2. Convierta un objeto llamado animal que contenga mínimo cinco propiedades a una cadena de caracteres.
   3. Convierta una cadena de caracteres a un objeto.

## Creación de un paquete--package.json

1. Cree una carpeta y ejecute en la terminal `npm init`.
   - NOTA: Si desea crear un archivo package.json con la configuración por defecto, utilice `npm init –yes`
2. Instale el paquete de express, mediante el comando `npm install express`.
   - NOTA: Cuando instala un paquete con npm, puede realizar 2 tipos de instalación:
     - Local: `npm install <package-name>` (se crea la carpeta node_modules)
     - Global: `npm install -g <package-name>`
3. Identifique los archivos que se añadieron, revise el código json y observe en qué parte se agregó el paquete.
4. Desinstale el paquete `npm uninstall express`.
5. Instale una versión específica de express mediante: `npm install express@4.15.1`
6. Instale la dependencia como dependencia de desarrollo mediante el comando `npm install express --save-dev`
7. Pruebe utilizar el comando `npx cowsay "Hola mundo"`
   - NOTA: ejecuta un paquete de npm sin necesidad de instalarlo de forma global o local. Una vez descargado, el código descargado se borrará.