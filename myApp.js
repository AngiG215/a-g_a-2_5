const express = require('express');
const helmet = require('helmet');
const app = express();

// La única misión de este archivo:
app.use(helmet.hidePoweredBy());

// Una ruta para que no dé error al entrar
app.get("/", (req, res) => {
  res.send("Servidor Activo y Protegido");
});

// Esto permite que server.js tome el control
module.exports = app;
