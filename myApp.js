const express = require('express');
const helmet = require('helmet');
const app = express();

// Esto es lo que el test busca
app.use(helmet.hidePoweredBy());

app.get("/", (req, res) => {
  res.send("Hello Express");
});

// ESTO ES VITAL: freeCodeCamp a veces prefiere que 
// el servidor NO esté escuchando aquí si usas su estructura
module.exports = app;

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Corriendo en puerto ${port}`);
});
