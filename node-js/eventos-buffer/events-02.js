//simular una factura
const EventEmitter = require('events'); //se importa el modulo eventos

var emisorProductos = new EventEmitter();

//definición de las funciones manejadoras del evento 
emisorProductos.on('error', () => { console.log(new Error('Falló la compra')) });
//funciones con varios parametros
emisorProductos.on('imprimir', (total, nombre) => {
    console.log(`Se realizó una compra por un valor de $${total} cop a nombre de ${nombre} el dia ${new Date().toLocaleDateString()}`);
});

//emisión de la función error
emisorProductos.emit('error');
//emisión de la función imprimir
emisorProductos.emit('imprimir', 5000, "Amparo");