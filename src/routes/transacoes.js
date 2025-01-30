const express = require('express');
const router = express.Router();
const db = require('../database/db');

// Rota para adicionar uma transação
router.post('/transacoes', (req,res) => {
    const{descricao, valor, tipo, data} = req.body;
    const query = `INSERT INTO transacoes (descricao, valor, tipo, data) VALUES (?, ?, ?, ?)
    `;
        db.run(query, [descricao,valor,tipo,data], function(err) {
            if (err) return res.status(500).json({error: err.message});
            res.status(201).json({id: this.lastID });
        });
});

// Rota para listar todas as transações
router.get('/transacoes', (req, res) => {
    const query = `SELECT * FROM transacoes`;
    db.all(query, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

module.exports = router;