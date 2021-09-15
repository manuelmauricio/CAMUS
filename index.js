const express = require('express');
const bodyParser = require('body-parser');
require('./src/models/connection');

/*requires de rutas*/
const analisis_router = require('./src/routers/analisisRouter');
const cita_router = require('./src/routers/citaRouter');
const consultorio_router = require('./src/routers/consultorioRouter');
const especialidad_router = require('./src/routers/especialidadRouter');
const laboratorio_router = require('./src/routers/laboratorioRouter');
const mensaje_router = require('./src/routers/mensajeRouter');
const notaMedica_router = require('./src/routers/notaMedicaRouter');
const opinion_router = require('./src/routers/opinionRouter');
const padecimiento_router = require('./src/routers/padecimientoRouter');
const usuario_router = require('./src/routers/usuarioRouter');


const app = express();
const port = 3000; // 5000 / 5001


app.use(bodyParser.json());
app.use('/api', analisis_router);
app.use('/api', cita_router);
app.use('/api', consultorio_router);
app.use('/api', especialidad_router);
app.use('/api', laboratorio_router);
app.use('/api', mensaje_router);
app.use('/api', notaMedica_router);
app.use('/api', opinion_router);
app.use('/api', padecimiento_router);
app.use('/api', usuario_router);

app.listen(port, () => {
    console.log('La aplicación está escuchando al puerto http://localhost:' + port);
});