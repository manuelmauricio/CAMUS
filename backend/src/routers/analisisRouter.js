const express = require('express');
const router = express.Router();

const analisis_controller = require('../controllers/analisisController');

router.post('/analisis', analisis_controller.analisis_create);
router.get('/analisis', analisis_controller.analisis_getall);
router.get('/analisis/:id', analisis_controller.analisis_getbyid);
router.put('/analisis/:id', analisis_controller.analisis_update);
router.delete('/analisis/:id', analisis_controller.analisis_delete);

module.exports = router;