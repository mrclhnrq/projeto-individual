var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDados(idUsuario) {
    var instrucaoSql = `
SELECT a.nome AS artista, o.movimento as movimento,
COUNT(c.idCurtida) AS curtidas,
(select count(cc.idCurtida) from curtidas cc join obras oo on cc.fkObra = 1 where fkUsuario = ${idUsuario} and oo.movimento = 'Pós-impressionismo') as curtidasPosImpressionismo,
(select count(cc.idCurtida) from curtidas cc join obras oo on cc.fkObra = 2 where fkUsuario = ${idUsuario} and oo.movimento = 'Impressionismo') as curtidasImpressionismo,
(select count(cc.idCurtida) from curtidas cc join obras oo on cc.fkObra = 3 where fkUsuario = ${idUsuario} and oo.movimento = 'Cubismo') as curtidasCubismo,
(select count(cc.idCurtida) from curtidas cc join obras oo on cc.fkObra = 1 where fkUsuario = ${idUsuario} and oo.fkArtista = 1) as curtidasVanGogh,
(select count(cc.idCurtida) from curtidas cc join obras oo on cc.fkObra = 2 where fkUsuario = ${idUsuario} and oo.fkArtista = 2) as curtidasClaudeMonet,
(select count(cc.idCurtida) from curtidas cc join obras oo on cc.fkObra = 3 where fkUsuario = ${idUsuario} and oo.fkArtista = 3) as curtidasPicasso
FROM curtidas c
JOIN obras o ON c.fkObra = o.idObra
JOIN artistas a ON o.fkArtista = a.idArtista
WHERE c.fkUsuario = ${idUsuario}
GROUP BY a.idArtista, o.movimento
ORDER BY curtidas DESC
LIMIT 1; 
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    buscarDados
};