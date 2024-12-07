const curtidasModel = require('../models/curtidasModel');

// Função para registrar curtida
const registrarCurtida = async (req, res) => {
    const { fkObra, fkUsuario } = req.body;

    if (!fkObra || !fkUsuario) {
        return res.status(400).json({ error: 'fkObra e fkUsuario são obrigatórios' });
    }

    try {
        await curtidasModel.registrarCurtida(fkObra, fkUsuario);
        res.status(200).json({ message: 'Curtida registrada com sucesso!' });
    } catch (error) {
        console.error('Erro ao registrar curtida:', error);
        res.status(500).json({ error: 'Erro ao registrar curtida' });
    }
};

module.exports = { registrarCurtida };
