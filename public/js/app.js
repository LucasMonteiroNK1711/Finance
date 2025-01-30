document.getElementById('form-transacao').addEventListener('submit', async (e) => {
    e.preventDefault();
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const tipo = document.getElementById('tipo').value;
    const data = document.getElementById('data').value;

    const response = await fetch('/api/transacoes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ descricao, valor, tipo, data }),
    });

    if (response.ok) {
        carregarTransacoes();
    }
});

async function carregarTransacoes() {
    const response = await fetch('/api/transacoes');
    const transacoes = await response.json();
    const lista = document.getElementById('lista-transacoes');
    lista.innerHTML = transacoes.map(transacao => `
        <li>${transacao.descricao} - R$ ${transacao.valor} (${transacao.tipo})</li>
    `).join('');
}

carregarTransacoes();