const express = require('express');
const router = express.Router();

const obrasController = require('../controllers/obrasController');

// Rota para buscar todas as obras
router.get('/buscarObras', obrasController.buscarObras);

module.exports = router;
