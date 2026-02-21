const express = require('express'); // Requerir Express
const helmet = require('helmet');   // Requerir Helmet (Punto 3 de tu instrucción)
const app = express();

// --- TU CÓDIGO VA AQUÍ ---

// Configuración de HSTS (Los puntos que corroboramos antes)
const ninetyDaysInSeconds = 90 * 24 * 60 * 60;

app.use(helmet.hsts({
  maxAge: ninetyDaysInSeconds,
  force: true
}));

// Otras configuraciones típicas de esas lecciones:
app.use(helmet.hidePoweredBy());
app.use(helmet.noSniff());
app.use(helmet.xssFilter());

// --- FIN DEL CÓDIGO ---

module.exports = app;
