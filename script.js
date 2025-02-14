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



let currentInput = '';  // Variável para armazenar o que o usuário digitou

// Função para adicionar as palavras ao display
function appendToDisplay(value) {
    currentInput += value;  // Adiciona o valor ao que foi digitado
    document.getElementById("display").value = currentInput;  // Atualiza o display com o valor acumulado
}

// Função para limpar o display
function clearDisplay() {
    currentInput = '';  // Limpa a entrada
    document.getElementById("display").value = '';  // Limpa o display
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

    document.getElementById("display").value = result;  // Mostra o resultado no display
}

// Adicionando listeners aos botões de forma programática
document.getElementById("btnEU").addEventListener("click", function() {
    appendToDisplay('EU');
});

document.getElementById("btnVOCE").addEventListener("click", function() {
    appendToDisplay('VOCE');
});

document.getElementById("btnOUTRA").addEventListener("click", function() {
    appendToDisplay('OUTRA(O)');
});

document.getElementById("btnFAMILIA").addEventListener("click", function() {
    appendToDisplay('FAMÍLIA');
});

document.getElementById("btnSOMA").addEventListener("click", function() {
    appendToDisplay('+');
});

document.getElementById("btnClear").addEventListener("click", function() {
    clearDisplay();
});

document.getElementById("btnResult").addEventListener("click", function() {
    calculateResult();
});