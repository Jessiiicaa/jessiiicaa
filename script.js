document.getElementById("btn").addEventListener("click", function() {
    alert("Botão clicado! Bem-vindo ao seu site de teste.");
});

window.onload = function() {
    // Verifique se há algum código de manipulação de botões aqui
    document.getElementById("btn").addEventListener("click", function() {
        alert("Botão clicado!");
    });
};

document.getElementById("botao5").addEventListener("click", function() {
    window.open("amovc.html", "_blank");
});
// script.js

let currentInput = '';  // Variável para armazenar o que o usuário digitou

// Função para adicionar as palavras (como "EU", "VOCE", etc.) ao display
function appendToDisplay(value) {
    currentInput += value;  // Adiciona o valor ao que foi digitado
    document.getElementById("display").value = currentInput;
}

// Função para limpar o display
function clearDisplay() {
    currentInput = '';  // Limpa a entrada
    document.getElementById("display").value = '';
}

// Função para calcular o "resultado" com base nas palavras
function calculateResult() {
    let result = '';
    
    // Definir o que acontece quando certas combinações de palavras são feitas
    if (currentInput === 'EU+VOCE') {
        result = 'PERFEITOS P SEMPRE';
    } else if (currentInput === 'VOCE+OUTRA(O)') {
        result = 'TRISTEZA';
    } else if (currentInput === 'EU+OUTRA(O)') {
        result = 'TRISTEZA';
    } else {
        result = 'RESULTADO DESCONHECIDO';
    }

    document.getElementById("display").value = result;
}

// Permitir o uso de teclas de atalho para facilitar a entrada
document.addEventListener('keydown', function (e) {
    if (e.key === 'E') {
        appendToDisplay('EU');
    } else if (e.key === 'V') {
        appendToDisplay('VOCE');
    } else if (e.key === 'O') {
        appendToDisplay('OUTRA(O)');  // Permite que "OUTRA(O)" seja adicionado
    } else if (e.key === 'F') {
        appendToDisplay('FAMÍLIA');
    } else if (e.key === '+') {
        appendToDisplay('+');  // Permite adicionar o sinal de soma "+"
    } else if (e.key === 'Enter') {
        calculateResult();
    } else if (e.key === 'Backspace') {
        clearDisplay();
    }
});