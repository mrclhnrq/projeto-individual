const db = require('../database/config');

async function registrarCurtida(fkObra, fkUsuario) {
    const query = `
        INSERT INTO curtidas (fkObra, fkUsuario)
        VALUES (?, ?);
    `;

    try {
        const resultado = await db.executar(query, [fkObra, fkUsuario]);
        return resultado;
    } catch (erro) {
        console.error("Erro ao registrar curtida:", erro);
        throw erro;
    }
}

module.exports = { registrarCurtida };