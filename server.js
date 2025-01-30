const express = require ('express');
const path = require ('path');
const app = express ();
const port = 3000;

// Configuração apra servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // Para receber dados JSON

// Rota inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar o Servidor 
app.listen (port, () => {
    console.log (` Servidor rodando em http://localhost:${port}`);
});