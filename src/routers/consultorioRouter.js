const express = require('express');
const router = express.Router();

const consultorio_controller = require('../controllers/consultorioController');

router.post('/consultorio', consultorio_controller.consultorio_create);
router.get('/consultorio', consultorio_controller.consultorio_getall);
router.get('/consultorio/:id', consultorio_controller.consultorio_getbyid);
router.put('/consultorio/:id', consultorio_controller.consultorio_update);
router.delete('/consultorio/:id', consultorio_controller.consultorio_delete);

module.exports = router; 
