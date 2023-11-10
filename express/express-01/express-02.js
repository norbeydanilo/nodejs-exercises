let express = require('express');

let app = express(); // Creating an Express "App"

app.use(express.static(__dirname)); // Adding middleware

app.get('/', function (request, response) { // A simple request handler
    response.send('Simple web server of files from ' + __dirname);
});

app.listen(3000, function () { // Start Express on the requests
    console.log('Listening at http://localhost:3000 exporting the directory ' +
        __dirname);
});