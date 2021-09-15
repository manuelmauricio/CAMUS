const express = require('express');
const router = express.Router();

const notaMedica_controller = require('../controllers/notaMedicaController');

router.post('/notamedica', notaMedica_controller.notaMedica_create);
router.get('/notamedica', notaMedica_controller.notaMedica_getall);
router.get('/notamedica/:id', notaMedica_controller.notaMedica_getbyid);
router.put('/notamedica/:id', notaMedica_controller.notaMedica_update);
router.delete('/notamedica/:id', notaMedica_controller.notaMedica_delete);

module.exports = router; 