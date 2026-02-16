const express = require('express');
const helmet = require('helmet');
const app = express();

// 1. El reto de freeCodeCamp
app.use(helmet.hidePoweredBy());

// 2. Servir archivos estáticos (necesario para la interfaz)
app.use('/public', express.static(process.cwd() + '/public'));

// 3. Ruta principal
app.get("/", function (request, response) {
  response.sendFile(process.cwd() + '/views/index.html');
});

// 4. ¡ESTO ES LO QUE ARREGLA EL ERROR!
// Exportamos la app para que server.js la use
module.exports = app;
