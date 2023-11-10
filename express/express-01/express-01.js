let express = require('express');

let expressApp = express(); // module uses factory pattern

expressApp.get('/', function (httpRequest, httpResponse) {
    httpResponse.send('hello world');
});

expressApp.listen(3000); // default address localhost use port 3000