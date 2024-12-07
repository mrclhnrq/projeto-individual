const db = require('../database/config');

const buscarObras = async () => {
  const query = `
    SELECT obras.idObra, obras.titulo, obras.url, obras.movimento, artistas.nome AS artista
    FROM obras
    INNER JOIN artistas ON obras.fkArtista = artistas.idArtista
  `;
  
  try {
    // Usa a função 'executar' para realizar a consulta
    const resultado = await db.executar(query);
    return resultado; // Retorna o resultado da consulta
  } catch (erro) {
    console.error('Erro ao executar a consulta:', erro);
    throw erro;
  }
};

module.exports = { buscarObras };



