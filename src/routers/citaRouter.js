const express = require('express');
const router = express.Router();

const cita_controller = require('../controllers/citaController');

router.post('/cita', cita_controller.cita_create);
router.get('/cita', cita_controller.cita_getall);
router.get('/cita/:id', cita_controller.cita_getbyid);
router.put('/cita/:id', cita_controller.cita_update);
router.delete('/cita/:id', cita_controller.cita_delete);

module.exports = router;