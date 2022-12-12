Esta aplicacion fue desarrollada con motivo del challenge propuesto por NBCH para desarrolladorxs Front End.
El mismo requiere implementar una SPA que muestre información del instituto de Arte de Chicago utilizando la siguiente API 
https://api.artic.edu/docs/#introduction

La SPA debe contener las siguientes pantallas:
- Obras de arte: Muestra una tabla paginada con las obras de arte. De manera OPCIONAL se puede agregar un buscador para las obras. 
Queda a criterio del desarrollador la elección de los datos a mostrar en esta pantalla. Al hacer click en una obra de arte 
en particular debe ir a la pantalla Detalle de obra de arte.

- Detalle de obra de arte: Muestra información de una obra de arte. Queda a criterio del desarrollador la elección de los datos a mostrar.


# Acerca de la App

- Lenguaje: Javascript
- Framework: React
- Versionado: Git 
- Componentes: Material UI
- Manejo de estados: Redux
- Alojamiento del código: github
- Gestion de dependencias: npm
- Manejo de rutas: react router


Listado de dependencias extraido de package.json
    "@material-ui/core": "^4.12.3",
    "@material-ui/icons": "^4.11.2",
    "@material-ui/lab": "^4.0.0-alpha.60",
    "@material-ui/pickers": "^3.3.10",
    "@material-ui/styles": "^4.11.4",
    "@mui/icons-material": "^5.10.16",
    "@reduxjs/toolkit": "^1.9.1",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.2.1",
    "react-bootstrap": "^2.6.0",
    "react-redux": "^8.0.5",
    "react-router": "^6.4.4",
    "react-router-dom": "^6.4.4",
    "react-scripts": "5.0.1",
    "redux": "^4.2.0",
    "redux-thunk": "^2.4.2",
    "web-vitals": "^2.1.4"



# CORRER LA APLICACION


Es requisito tener instalado y actualizado node.js.
Una vez clonado el repositorio, debe dirigirse a la terminal, colocarse dentro del directorio (cd artinstituteapp). Ejecutar el comando 'npm i' para instalar las dependencias necesarias para correr el programa. Una vez completada la operación, ejecutar el comando 'npm start' para correr la aplicacion, que por defecto se conectara al puerto 3000 del local.
Ejecutar el comando 'npm config set legacy-peer-deps true' en caso de que las dependencias se pisen.


# FUNCIONAMIENTO DE LA APLICACION

Funcionamiento de componentes:
- Home: La aplicación cuenta en esta pantalla con una pantalla de bienvenida y un link a la lista de obras.
- Header: En el header se encuentran los links para moverse por la página, asi como un borrador del usuario, implementable en una próxima versión, por ahora no funciona y el nombre de usuario esta pasado como default.
- Tarjetas: Esta lista es un grid de Tarjetas
- Tarjeta: que muestra la imagen, titulo, autor y fecha de creación. Esta tarjeta tambien tiene un link a la visualización de los detalles.
- Detalles: En la pantalla de detalles se muestra más información: el país de origen, los materiales y el estilo. En esta misma pantalla, junto al título, puede marcarse como favorita la obra.
- Favoritas: Permite visualizar las obras que han sido seleccionadas como favoritas por el usuario.
- PaginaDefault: En caso de que el usuario quiera ingresar a una dirección desconocida para react router, le avisa y lo redirige al home.
- Error: Todavia sin funcionamiento, la idea es usarla de ErrorBoundary en una versión próxima.
- Footer: Un footer genérico donde se podría agregar más información de ser necesario.


# ACERCA DE LOS ESTILOS/

Se utilizó react bootstrap y material ui para el diseño de la página. El tema fue creado utilizando createTheme de material.ui, con
los colores documentados en confluence.


# COMENTARIOS DEL DESARROLLADOR

Proximas versiones: en las próximas versiones de la app, se podria:
- Completar el manejo de errores, hacerlo mas eficiente, que utilice el estado de la app
- Agregar un paginado o un boton de "refresh" de obras al feed.
- Implementar un login que permita al usuario guardar sus obras favoritas.
- Algún tipo de alta 