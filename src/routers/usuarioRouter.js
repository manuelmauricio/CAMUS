const express = require('express');
const router = express.Router();

const usuario_controller = require('../controllers/usuarioController');

router.post('/usuario', usuario_controller.usuario_create);
router.get('/usuario', usuario_controller.usuario_getall);
router.get('/usuario/:id', usuario_controller.usuario_getbyid);
router.put('/usuario/:id', usuario_controller.usuario_update);
router.delete('/usuario/:id', usuario_controller.usuario_delete);

module.exports = router; 