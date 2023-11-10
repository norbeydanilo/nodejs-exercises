// Patrones asíncronos en JS

/*
Callbacks

Son la pieza clave para que Javascript pueda funcionar de forma asíncrona. 
De hecho, el resto de patrones asíncronos en Javascript está basado en callbacks de un modo u otro

No es más que una función que se pasa como argumento de otra función

Un callback representa el '¿Qué quieres hacer una vez que tu operación asíncrona termine?'
*/

setTimeout(function () {
  console.log("Hola Mundo con retraso 1!");
}, 1000)

const myCallback = () => console.log("Hola Mundo con retraso 2!");
setTimeout(myCallback, 2000);

/*
setTimeout es una función asíncrona que programa la ejecución de un callback 
una vez ha transcurrido, como mínimo, una determinada cantidad de tiempo (1 segundo en el ejemplo anterior)
*/

setTimeout(function () {
  console.log("Esto debería aparecer primero");
}, 0);
console.log("Sorpresa!");

/*
Es importante comprender que, incluso si configuramos el retraso como 0ms, 
no significa que el callback vaya a ejecutarse inmediatamente.

Recuerda, un callback que se añade al loop de eventos debe esperar su turno. 
En nuestro ejemplo, el callback del setTimeout debe esperar el primer tick. 
Sin embargo, la pila está ocupada procesando la línea console.log("Sorpresa!"). 
El callback se despachará una vez la pila quede vacía, en la práctica, cuando Sorpresa! haya sido atendido.
*/

/*

Callback Hell

Los callbacks también pueden lanzar a su vez llamadas asíncronas, 
así que pueden anidarse tanto como se desee. 
Inconveniente, podemos acabar con código como este:
*/

/*
setTimeout(function () {
  console.log("Etapa 1 completada");
  setTimeout(function () {
    console.log("Etapa 2 completada");
    setTimeout(function () {
      console.log("Etapa 3 completada");
      setTimeout(function () {
        console.log("Etapa 4 completada");
        // Podríamos continuar hasta el infinito...
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);

/*
Éste es uno de los inconvenientes clásicos de los callbacks,
además de la indentación, resta legibilidad, dificulta su mantenimiento
y añade complejidad ciclomática.
Al Callback Hell también se le conoce como Pyramid of Doom o Hadouken.
*/

/*
Promesas

Una promesa es un objeto que representa el resultado de una operación asíncrona.
Este resultado podría estar disponible ahora o en el futuro.
Las promesas se basan en callbacks pero añaden azúcar para un mejor manejo y sintaxis.
Las promesas son especiales en términos de asincronía ya que añaden un nuevo nivel de prioridad.
*/

/*
Una promesa es un objeto al que le adjuntamos callbacks, en lugar de pasarlos directamente a la función asíncrona.
La forma en que registramos esos dos callbacks es mediante el método .then(resolveCallback, rejectCallback).
En terminología de promesas, decimos que una promesa se resuelve con éxito (resolved) o se rechaza con fallo (rejected).
Echa un vistazo al siguiente ejemplo:
*/

/*
const currentURL = document.URL.toString();
const promise = fetch(currentURL);
promise.then(result => console.log(result), e => console.log(`Error capturado:  ${e}`));

// Más legible:

fetch(document.URL.toString())
  .then(result => console.log(result),
    e => console.log(`Error capturado:  ${e}`));


/*
En el ejemplo anterior, pedimos al servidor que nos provea una URL utilizando la función asíncrona fetch
y nos devuelve una promesa. Configuramos la promesa con dos callbacks:
uno para resolver la promesa, que mostrará la página por consola en caso de éxito,
y otro para rechazarla en caso de fallo que mostrará el error asociado.
*/

// Las promesas son muy útiles para envolver antiguas APIs asíncronas
// que funcionan a través de callbacks puros.

/*
Async/Await

La etiqueta async declara una función como asíncrona e indica que una promesa será automáticamente devuelta. 
Podemos declarar como async tanto funciones con nombre, anónimas, o funciones flecha. 
Por otro lado, await debe ser usado siempre dentro de una función declarada como async 
y esperará automáticamente (de forma asíncrona y no bloqueante) a que una promesa se resuelva.
*/

/*
const checkServerWithSugar = async (url) => {
  const response = await fetch(url);
  return `Estado del Servidor: ${response.status === 200 ? "OK" : "NOT OK"}`;
}

checkServerWithSugar(document.URL.toString())
  .then(result => console.log(result));

/*
En la práctica, este comportamiento es equivalente a decir que el operador await 'pausa la ejecución' 
o 'espera a una promesa'. Probablemente hayas leído esta definición en algún sitio, pero cuidado 
con los matices, ya que sugiere la idea errónea de que await bloquea o espera de forma síncrona, y no, no lo hace.
*/