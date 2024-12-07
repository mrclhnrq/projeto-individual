const express = require('express');
const router = express.Router();
const curtidasController = require('../controllers/curtidasController');

// Rota para registrar curtida
router.post('/curtir', curtidasController.registrarCurtida);

module.exports = router;
