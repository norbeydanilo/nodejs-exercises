var eventos = require("events");

var emisorEventos = eventos.EventEmitter;
var ee = new emisorEventos();

ee.on('datos', function (fecha) {
    console.log(fecha);
})

setInterval(function () {
    ee.emit('datos', Date.now());
}, 500);