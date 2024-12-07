var mysql = require("mysql2");

// CONEXÃO DO BANCO MYSQL SERVER
var mySqlConfig = {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
};

function executar(instrucao, parametros = []) {
    // Verifica se o ambiente de execução foi configurado corretamente
    if (process.env.AMBIENTE_PROCESSO !== "producao" && process.env.AMBIENTE_PROCESSO !== "desenvolvimento") {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM .env OU dev.env OU app.js\n");
        return Promise.reject("AMBIENTE NÃO CONFIGURADO EM .env");
    }

    // Retorna uma Promise para realizar a execução da query
    return new Promise(function (resolve, reject) {
        var conexao = mysql.createConnection(mySqlConfig);
        conexao.connect();
        
        // Executa a query passando os parâmetros
        conexao.query(instrucao, parametros, function (erro, resultados) { 
            conexao.end(); // Fecha a conexão após a execução da query
            if (erro) {
                reject(erro); // Caso ocorra erro, rejeita a promise
            }
            console.log(resultados); // Exibe os resultados da query no console
            resolve(resultados); // Resolve a promise com os resultados
        });

        // Tratamento de erro de conexão
        conexao.on("error", function (erro) {
            console.error("ERRO NO MySQL SERVER:", erro.sqlMessage);
        });
    });
}


module.exports = {
    executar
};