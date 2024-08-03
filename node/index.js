'use strict'

const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql');
const connection = mysql.createConnection(config);

const $db = connection.query(`CREATE TABLE IF NOT EXISTS nodedb.people(
    \`id\` int(11) NOT NULL auto_increment,
    \`name\` VARCHAR(255) NOT NULL,
    PRIMARY KEY  (\`id\`)
    ) ENGINE=InnoDB;`
);

const sql = `INSERT INTO people (name) VALUES
('Cristovão Colombo'),
('Pedro Alvares Cabral'),
('Teodoro da Fonseca'),
('Marco Polo')`;
connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Names inserted');
});

app.get('/', (req, res) => {
    connection.query('SELECT * FROM people', (err, results) => {
        if (err) throw err;
        let namesList = '<ul>';
        results.forEach(person => {
            namesList += `<li>${person.name}</li>`;
        });
        namesList += '</ul>';
        res.send(`<h1>Full Cycle Rocks!!!</h1>${namesList}`);
    });
});

app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`);
});
