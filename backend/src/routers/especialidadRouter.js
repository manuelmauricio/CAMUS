const express = require('express');
const router = express.Router();

const especialidad_controller = require('../controllers/especialidadController');

router.post('/especialidad', especialidad_controller.especialidad_create);
router.get('/especialidad', especialidad_controller.especialidad_getall);
router.get('/especialidad/:id', especialidad_controller.especialidad_getbyid);
router.put('/especialidad/:id', especialidad_controller.especialidad_update);
router.delete('/especialidad/:id', especialidad_controller.especialidad_delete);

module.exports = router; 