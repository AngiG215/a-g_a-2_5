const express = require('express');
const helmet = require('helmet');
const app = express();

// 1. EL MIDDLEWARE DEBE IR PRIMERO
app.use(helmet.hidePoweredBy());

// 2. RUTA RESPUESTA (A veces el test la busca)
app.get("/", (req, res) => {
  res.send("Hello Express");
});

// 3. EXPORTAR EL APP (Fundamental)
module.exports = app;

// El listen puede quedarse aquí o al final, no afecta si lo anterior está bien
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Tu servidor está corriendo en el puerto ${port}`);
});
