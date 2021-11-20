const express = require('express');
const router = express.Router();

const laboratorio_controller = require('../controllers/laboratorioController');
const checkJwt = require('../middleware/jwksRsa ');

router.post('/laboratorio', laboratorio_controller.laboratorio_create);
router.get('/laboratorio', laboratorio_controller.laboratorio_getall);
router.get('/laboratorio/:id', checkJwt, laboratorio_controller.laboratorio_getbyid);
router.put('/laboratorio/:id', checkJwt, laboratorio_controller.laboratorio_update);
router.delete('/laboratorio/:id', checkJwt, laboratorio_controller.laboratorio_delete);

module.exports = router;