'use strict';

/*
* Un simple programa Node.js para exportar el directorio de trabajo actual a través de un listado de webserver
* en un puerto (ver portno más abajo). 
* Para iniciar el servidor web ejecute el comando:
* node webServer.js
*
* Tenga en cuenta que cualquier persona capaz de conectarse a localhost:3000 será capaz de obtener cualquier archivo accesible
* al usuario actual en el directorio actual o cualquiera de sus hijos.
*/

/* jshint node: true */

var express = require('express');

var portno = 3000;   // Port number to use

var app = express();

var cs142models = require('./modelData/photoApp.js').cs142models;

// Hacemos que el módulo estático Express (http://expressjs.com/en/starter/static-files.html) haga todo lo siguiente
// el trabajo por nosotros.
app.use(express.static(__dirname));

app.get('/', function (request, response) {
  response.send('Simple web server of files from ' + __dirname);
});

app.get('/test/:p1', function (request, response) {
  // Express analiza el ":p1" de la URL y lo devuelve en los objetos request.params.
  var param = request.params.p1;
  console.log('/test called with param1 = ', param);
  if (param !== "info") {
    console.error("Nothing to be done for param: ", param);
    response.status(400).send('Not found');
    return;
  }

  var info = cs142models.schemaInfo();

  // La consulta no devolvió un error pero no encontró el objeto SchemaInfo - Esto
  // es también un retorno de error interno.
  if (info.length === 0) {
    response.status(500).send('Missing SchemaInfo');
    return;
  }
  response.status(200).send(info);
});

/*
 * URL /user/list - Return all the User object.
 */
app.get('/user/list', function (request, response) {
  response.status(200).send(cs142models.userListModel());
  return;
});

/*
 * URL /user/:id - Return the information for User (id)
 */
app.get('/user/:id', function (request, response) {
  var id = request.params.id;
  var user = cs142models.userModel(id);
  if (user === null) {
    console.log('User with _id:' + id + ' not found.');
    response.status(400).send('Not found');
    return;
  }
  response.status(200).send(user);
  return;
});

/*
 * URL /photosOfUser/:id - Return the Photos for User (id)
 */
app.get('/photosOfUser/:id', function (request, response) {
  var id = request.params.id;
  var photos = cs142models.photoOfUserModel(id);
  if (photos.length === 0) {
    console.log('Photos for user with _id:' + id + ' not found.');
    response.status(400).send('Not found');
    return;
  }
  response.status(200).send(photos);
});


var server = app.listen(portno, function () {
  var port = server.address().port;
  console.log('Listening at http://localhost:' + port + ' exporting the directory ' + __dirname);
});