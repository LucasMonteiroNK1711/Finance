const sqlite3 = require ('sqlite3'). verbose();
const db = new sqlite3.Database('./database.db');

//criação da tabela de transações
db.serialize(() =>{
    db.run(`
        CREATE TABLE IF NOT EXISTS transacoes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        descricao TEXT,
        valor REAL,
        tipo TEXT, -- 'receita' ou 'despesa'
        data TEXT
        )
        `);
});

module.exports = db;