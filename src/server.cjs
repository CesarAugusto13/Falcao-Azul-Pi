const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();


hostname = '127.0.0.1'
usuario = 'root'
senha = 'root'
esquema = 'FalcaoAzul'
// Configuração da conexão com o banco de dados MySQL
const db = mysql.createConnection({
    host: hostname,
    user: usuario,
    password: senha
});

app.use(cors());
app.use(bodyParser.json());


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
            
            const createEventsTable = `
            CREATE TABLE IF NOT EXISTS \`eventos\` (
              \`id\` INT NOT NULL AUTO_INCREMENT,
              \`titulo\` VARCHAR(45) NOT NULL,
              \`descricao\` VARCHAR(255) NOT NULL,
              \`data\` DATE NOT NULL,
              PRIMARY KEY (\`id\`)
            );`;

            db.query(createUsersTable, (err, result) => {
                if (err) {
                    console.error('Erro ao criar a tabela Users:', err);
                    return;
                }
                console.log('Tabela Users criada ou já existente');


            db.query(createEventsTable, (err, result) =>{
                if (err) {
                    console.error('Erro ao criar a tabela Events:', err);
                    return;
                }
                console.log('Tabela Events criada ou já existente');
            })
        });
    });
});

app.post('/add-event', (req, res) => {
    const { titulo, descricao, data } = req.body;
    const query = 'INSERT INTO eventos (titulo, descricao, data) VALUES (?, ?, ?)';
    db.query(query, [titulo, descricao, data], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(200).send('Evento adicionado com sucesso');
    });
});


app.get('/events', (req, res) => {
    const query = 'SELECT * FROM eventos';
    db.query(query, (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(200).json(results);
    });
});


app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
});

module.exports = db;
