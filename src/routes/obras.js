const express = require('express');
const router = express.Router();

const obraController = require('../controllers/obrasController');

// Rota para buscar todas as obras
router.get('/buscarObras', obraController.buscarObras);

module.exports = router;
