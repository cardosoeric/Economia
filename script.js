// Simulador de Orçamento
document.getElementById('budget-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obter valores dos campos
    const renda = parseFloat(document.getElementById('renda').value);
    const moradia = parseFloat(document.getElementById('moradia').value) || 0;
    const transporte = parseFloat(document.getElementById('transporte').value) || 0;
    const alimentacao = parseFloat(document.getElementById('alimentacao').value) || 0;
    const educacao = parseFloat(document.getElementById('educacao').value) || 0;
    const saude = parseFloat(document.getElementById('saude').value) || 0;
    const lazer = parseFloat(document.getElementById('lazer').value) || 0;
    const vestuario = parseFloat(document.getElementById('vestuario').value) || 0;
    const outros = parseFloat(document.getElementById('outros').value) || 0;
    
    // Validar renda
    if (!renda || renda <= 0) {
        alert('Por favor, insira uma renda válida.');
        return;
    }
    
    // Calcular total de despesas
    const totalDespesas = moradia + transporte + alimentacao + educacao + saude + lazer + vestuario + outros;
    
    // Calcular saldo
    const saldo = renda - totalDespesas;
    
    // Calcular porcentagens
    const porcentagemMoradia = (moradia / renda) * 100;
    const porcentagemTransporte = (transporte / renda) * 100;
    const porcentagemAlimentacao = (alimentacao / renda) * 100;
    const porcentagemTotal = (totalDespesas / renda) * 100;
    
    // Exibir resultado
    const resultado = document.getElementById('resultado');
    resultado.style.display = 'block';
    
    let html = `<h3>Resultado do Orçamento</h3>`;
    html += `<p><strong>Renda Mensal:</strong> R$ ${renda.toFixed(2)}</p>`;
    html += `<p><strong>Total de Despesas:</strong> R$ ${totalDespesas.toFixed(2)} (${porcentagemTotal.toFixed(1)}% da renda)</p>`;
    html += `<p><strong>Saldo:</strong> R$ ${saldo.toFixed(2)}</p>`;
    
    // Análise das despesas
    html += `<h4>Análise das Despesas:</h4>`;
    html += `<ul>`;
    html += `<li>Moradia: ${porcentagemMoradia.toFixed(1)}% da renda (recomendado: até 30%)</li>`;
    html += `<li>Transporte: ${porcentagemTransporte.toFixed(1)}% da renda (recomendado: até 15%)</li>`;
    html += `<li>Alimentação: ${porcentagemAlimentacao.toFixed(1)}% da renda (recomendado: até 20%)</li>`;
    html += `</ul>`;
    
    // Recomendações
    html += `<h4>Recomendações:</h4>`;
    
    if (saldo > 0) {
        resultado.className = 'result positive';
        html += `<p>Parabéns! Você está com saldo positivo. Considere:</p>`;
        html += `<ul>`;
        html += `<li>Destinar parte desse valor para poupança ou investimentos</li>`;
        html += `<li>Criar uma reserva de emergência (equivalente a 3-6 meses de despesas)</li>`;
        html += `<li>Investir em educação ou qualificação profissional</li>`;
        html += `</ul>`;
    } else {
        resultado.className = 'result negative';
        html += `<p>Atenção! Você está com saldo negativo. Considere:</p>`;
        html += `<ul>`;
        html += `<li>Revisar suas despesas e identificar onde pode economizar</li>`;
        html += `<li>Reduzir gastos com lazer e vestuário temporariamente</li>`;
        html += `<li>Buscar fontes alternativas de renda</li>`;
        html += `</ul>`;
    }
    
    resultado.innerHTML = html;
    
    // Rolar para o resultado
    resultado.scrollIntoView({ behavior: 'smooth' });
});

// Menu responsivo
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
});