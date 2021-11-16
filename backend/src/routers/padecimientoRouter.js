const express = require('express');
const router = express.Router();

const padecimiento_controller = require('../controllers/padecimientoController');

router.post('/padecimiento', padecimiento_controller.padecimiento_create);
router.get('/padecimiento', padecimiento_controller.padecimiento_getall);
router.get('/padecimiento/:id', padecimiento_controller.padecimiento_getbyid);
router.put('/padecimiento/:id', padecimiento_controller.padecimiento_update);
router.delete('/padecimiento/:id', padecimiento_controller.padecimiento_delete);

module.exports = router; 