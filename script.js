document.getElementById("btn").addEventListener("click", function() {
    alert("Botão clicado! Bem-vindo ao seu site de teste.");
});

window.onload = function() {
    // Verifique se há algum código de manipulação de botões aqui
    document.getElementById("btn").addEventListener("click", function() {
        alert("Botão clicado!");
    });
};

document.getElementById("botaoNovaAba").addEventListener("click", function() {
    window.open("nova-aba.html", "_blank"); // Abre a nova aba
});