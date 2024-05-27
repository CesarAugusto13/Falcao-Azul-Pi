const express = require('express');
const mysql = require('mysql2');
const app = express();

hostname = '127.0.0.1'
usuario = 'root'
senha = '#Root@75'
esquema = 'FalcaoAzul'
// Configuração da conexão com o banco de dados MySQL
const db = mysql.createConnection({
    host: hostname,
    user: usuario,
    password: senha
});

// Conectar ao banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao servidor MySQL');
    
    // Criar o esquema (banco de dados) se não existir
    db.query(`CREATE DATABASE IF NOT EXISTS ${esquema}`, (err, result) => {
        if (err) {
            console.error('Erro ao criar o esquema:', err);
            return;
        }
        console.log('Esquema criado ou já existente');
        
        // Alterar para o esquema criado
        db.changeUser({ database: esquema }, (err) => {
            if (err) {
                console.error('Erro ao selecionar o esquema:', err);
                return;
            }
            console.log('Esquema selecionado:', db.config.database);
            
            // Criar a tabela de usuários se não existir
            const createUsersTable = `
                CREATE TABLE IF NOT EXISTS usuarios (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nome VARCHAR(255) NOT NULL,
                    email VARCHAR(255) NOT NULL UNIQUE,
                    senha VARCHAR(255) NOT NULL
                )
            `;
            
            db.query(createUsersTable, (err, result) => {
                if (err) {
                    console.error('Erro ao criar a tabela Users:', err);
                    return;
                }
                console.log('Tabela Users criada ou já existente');
                
                // Iniciar o servidor Express
                app.listen(3001, () => {
                    console.log('Servidor rodando na porta 3001');
                });
            });
        });
    });
});

module.exports = db;
