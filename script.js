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
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value); // Avalia a expressão matemática
    } catch (error) {
        display.value = 'Erro';
    }
}