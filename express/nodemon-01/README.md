# Configuración de Nodemon para desarrollo

## Paso 1: Instalación de Nodemon

Nodemon es una librería que se utiliza como una dependencia solo para desarrollo, ya que no la necesitamos cuando la aplicación esté corriendo en producción. Esta librería nos brinda la opción de que después de guardar cualquier archivo en el directorio de trabajo, nuestra aplicación se vuelva a reiniciar automáticamente.

Para instalar Nodemon, ejecuta los siguientes comandos:

```bash
npm install -D nodemon
npm install -g nodemon
```

La opción `-D` es un atajo para `--save-dev`, lo que significa que el paquete se agregará a la sección `devDependencies` de tu archivo `package.json`.

## Paso 2: Modificación de scripts en package.json

Modifica la sección de scripts del archivo `package.json` para añadir el script que ejecutará nuestra aplicación en modo de desarrollo y en el script `start` en modo de producción, de la siguiente manera:

```json
"scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon"
}
```

No es necesario indicarle a nodemon qué archivo va a ejecutar pues por convención buscará el archivo `index.js`, el cual es el punto de entrada de nuestra aplicación. Más adelante se configurará el script de pruebas: `test`.

## Paso 3: Ejecución del servidor

Si el servidor se está ejecutando, detenlo con `CTRL+C`. Pero esta vez, ejecútalo con `npm run dev`.

## Paso 4: Comprobación

Para comprobar que todo esté funcionando, abre el navegador en la siguiente dirección `http://localhost:3000`.

## Paso 5: Revisión de archivos

Revisa el folder con los archivos `index.js` y `config.js`.
