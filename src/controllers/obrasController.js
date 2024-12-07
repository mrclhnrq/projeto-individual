const obrasModel = require('../models/obrasModel');

// Controlador para buscar todas as obras
const buscarObras = async (req, res) => {
  try {
    const obras = await obrasModel.buscarObras();
    res.status(200).json(obras); // Envia as obras em formato JSON
  } catch (error) {
    console.error('Erro ao buscar as obras:', error);
    res.status(500).json({ message: 'Erro ao buscar obras.' });
  }
};

module.exports = { buscarObras };
