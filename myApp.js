const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet.hidePoweredBy());

// Esto es para que no se cierre el servidor
app.get("/", (req, res) => {
  res.send("Hello Express");
});

module.exports = app;

