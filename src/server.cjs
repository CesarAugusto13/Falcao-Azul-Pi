const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

const hostname = '127.0.0.1';
const usuario = 'root';
const senha = '#Root@75';
const esquema = 'FalcaoAzul';

const db = mysql.createConnection({
    host: hostname,
    user: usuario,
    password: senha
});

app.use(cors());
app.use(bodyParser.json());

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao servidor MySQL');
    
    db.query(`CREATE DATABASE IF NOT EXISTS ${esquema}`, (err, result) => {
        if (err) {
            console.error('Erro ao criar o esquema:', err);
            return;
        }
        console.log('Esquema criado ou já existente');
        
        db.changeUser({ database: esquema }, (err) => {
            if (err) {
                console.error('Erro ao selecionar o esquema:', err);
                return;
            }
            console.log('Esquema selecionado:', db.config.database);
            
            const createUsersTable = `
                CREATE TABLE IF NOT EXISTS usuarios (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nome VARCHAR(255) NOT NULL,
                    email VARCHAR(255) NOT NULL UNIQUE,
                    senha VARCHAR(255) NOT NULL
                )
            `;
            
            const createEventsTable = `
                CREATE TABLE IF NOT EXISTS eventos (
                  id INT NOT NULL AUTO_INCREMENT,
                  titulo VARCHAR(45) NOT NULL,
                  descricao VARCHAR(255) NOT NULL,
                  valor INT,  
                  requisitos VARCHAR(255), 
                  data DATE NOT NULL,
                  PRIMARY KEY (id)
                );
            `;

            db.query(createUsersTable, (err, result) => {
                if (err) {
                    console.error('Erro ao criar a tabela Users:', err);
                    return;
                }
                console.log('Tabela Users criada ou já existente');
            });

            db.query(createEventsTable, (err, result) => {
                if (err) {
                    console.error('Erro ao criar a tabela Events:', err);
                    return;
                }
                console.log('Tabela Events criada ou já existente');
            });
        });
    });
});

app.post('/add-event', (req, res) => {
    const { titulo, descricao, valor, requisitos, data } = req.body;
    const query = 'INSERT INTO eventos (titulo, descricao, valor, requisitos, data) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [titulo, descricao, valor, requisitos, data], (err, result) => {
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


app.delete('/delete-event/:id', (req, res) => {
    const eventId = req.params.id;
    const query = 'DELETE FROM eventos WHERE id = ?';
    db.query(query, [eventId], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send('Evento excluído com sucesso');
    });
});

app.put('/update-event/:id', (req, res) => {
    const eventId = req.params.id;
    const { titulo, descricao, valor, requisitos, data } = req.body;
    const query = `
        UPDATE eventos 
        SET titulo = ?, descricao = ?, valor = ?, requisitos = ?, data = ?
        WHERE id = ?
    `;

    db.query(query, [titulo, descricao, valor, requisitos, data, eventId], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Evento não encontrado');
        }
        res.status(200).send('Evento atualizado com sucesso');
    });
});

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});

module.exports = db;
