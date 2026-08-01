
# CRUD de Productos

Este proyecto consiste en un CRUD de productos desarrollado con Node.js, Express y SQLite. Permite agregar, consultar, actualizar y eliminar productos de una base de datos.

## Tecnologías utilizadas

- Node.js
- Express
- SQLite
- HTML
- CSS
- JavaScript

## Instalación

1. Instalar las dependencias.


npm install express sqlite3 


2. Ejecutar el proyecto.


node server.js


5. Abrir el navegador y entrar a:


http://localhost:3000


## Funcionalidades

- Agregar productos.
- Consultar productos.
- Actualizar productos.
- Eliminar productos.
- Validar que el precio y el stock no sean menores que cero.

## Organización del proyecto

Organicé el proyecto en varias carpetas para que el código fuera más fácil de entender. En routes están las rutas de la aplicación, en controllers se manejan las peticiones del usuario, en services se hacen las validaciones de los datos, en models están las consultas a la base de datos, database contiene la conexión con SQLite y en public se encuentran los archivos del frontend, como el HTML, CSS y JavaScript.

## Justificación

Elegí Node.js y Express porque son las herramientas con las que más he trabajado y me resultan fáciles de usar. Organicé el proyecto en diferentes carpetas para que el código estuviera más ordenado y cada parte cumpliera una función específica, como manejar las rutas, las consultas a la base de datos y las validaciones. Durante el desarrollo tuve algunos inconvenientes con la actualización de los productos y la comunicación entre el frontend y el backend, pero los fui solucionando. También agregué validaciones para evitar que se registraran productos con un precio o un stock menor que cero. En general, esta prueba me ayudó a practicar la organización de un proyecto y a reforzar mis conocimientos en Express y SQLite.

## Dificultad

**Fue pan comido.**
>>>>>>> dev
