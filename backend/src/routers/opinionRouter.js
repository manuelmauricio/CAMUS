const express = require('express');
const router = express.Router();

const opinion_controller = require('../controllers/opinionController');
const checkJwt = require('../middleware/jwksRsa ');


router.post('/opinion',checkJwt, opinion_controller.opinion_create);
router.get('/opinion', opinion_controller.opinion_getall);
router.get('/opinion/:id', opinion_controller.opinion_getbyid);
router.get('/opinion/doctor/:id',checkJwt, opinion_controller.opinion_getbydoctor);
router.put('/opinion/:id', opinion_controller.opinion_update);
router.delete('/opinion/:id', opinion_controller.opinion_delete);

module.exports = router; 