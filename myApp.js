const express = require('express');
const app = express();
const helmet = require('helmet');

app.use(helmet.hidePoweredBy());

// Esto es para que no se cierre el servidor
app.get("/", (req, res) => {
  res.send("¡Servidor funcionando con Helmet!");
});

module.exports = app;

// El servidor escuchando
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Tu servidor está corriendo en el puerto ${port}`);
});
