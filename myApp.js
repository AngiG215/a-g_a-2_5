const express = require('express');
const helmet = require('helmet');
const app = express();

// El corazón del ejercicio:
app.use(helmet.hidePoweredBy());

// Esto sirve para que la página de freeCodeCamp se vea bonita
app.use('/public', express.static(process.cwd() + '/public'));
app.get("/", function (request, response) {
  response.sendFile(process.cwd() + '/views/index.html');
});

// ESTA LÍNEA ES LA CLAVE:
module.exports = app;
