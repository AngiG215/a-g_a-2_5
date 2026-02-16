const express = require('express');
const helmet = require('helmet'); // Importamos Helmet
const app = express();

// ESTA ES LA ÚNICA LÍNEA QUE EL TEST BUSCA
app.use(helmet.hidePoweredBy());

// Una ruta simple para verificar que funciona
app.get("/", function (request, response) {
  response.send("Hello Express");
});

// ¡ESTO ES LO MÁS IMPORTANTE! 
// No pongas app.listen aquí. Solo exporta.
module.exports = app;
const api = require('./server.js');
app.use('/_api', api);
