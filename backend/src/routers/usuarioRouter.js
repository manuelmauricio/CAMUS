const express = require('express');
const router = express.Router();

const usuario_controller = require('../controllers/usuarioController');
const checkJwt = require('../middleware/jwksRsa ');

 
router.post('/usuario',checkJwt, usuario_controller.usuario_create);
router.get('/usuario', checkJwt, usuario_controller.usuario_getall);
router.get('/usuario/:id', usuario_controller.usuario_getbyid);
router.put('/usuario/:id', usuario_controller.usuario_update);
router.delete('/usuario/:id', usuario_controller.usuario_delete);

module.exports = router; 