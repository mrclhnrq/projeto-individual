const db = require('../database/config');

const buscarObras = async () => {
  const query = `
    SELECT obras.idObra, obras.titulo, obras.url, obras.movimento, artistas.nome AS artista
    FROM obras
    INNER JOIN artistas ON obras.fkArtista = artistas.idArtista
  `;
  const [rows] = await db.query(query);
  return rows;
};

module.exports = { buscarObras };


