const express = require('express');
const router = express.Router();

const mensaje_controller = require('../controllers/mensajeController');

router.post('/mensaje', mensaje_controller.mensaje_create);
router.get('/mensaje', mensaje_controller.mensaje_getall);
router.get('/mensaje/:id', mensaje_controller.mensaje_getbyid);
router.put('/mensaje/:id', mensaje_controller.mensaje_update);
router.delete('/mensaje/:id', mensaje_controller.mensaje_delete);

module.exports = router; 