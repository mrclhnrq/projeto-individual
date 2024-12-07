const obrasModel = require('../models/obrasModel');

const buscarObras = async (req, res) => {
  try {
    const obras = await obrasModel.buscarObras();
    res.json(obras);  // Retorna as obras no formato JSON
  } catch (error) {
    console.error('Erro ao buscar as obras:', error);
    res.status(500).json({ message: 'Erro ao buscar as obras', error: error.message });
  }
};

module.exports = { buscarObras };

