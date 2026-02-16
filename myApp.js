const express = require('express');
const helmet = require('helmet');
const app = express();

// La única línea que freeCodeCamp revisa:
app.use(helmet.hidePoweredBy());

// Rutas para que la página cargue bien
app.get("/", function (request, response) {
  response.send("Hello Express - Helmet is active!");
});

// ESTO ES LO QUE EL SERVER.JS BUSCA:
module.exports = app;
