let nomes = JSON.parse(localStorage.getItem("nomes")) || []; // Recupera nomes do localStorage ou inicia um array vazio
let sorteio = JSON.parse(localStorage.getItem("sorteio")) || {}; // Recupera o sorteio do localStorage ou inicia vazio

document.addEventListener("DOMContentLoaded", () => {
    atualizarLista(); // Atualiza a lista ao carregar a página
});

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    if (nomes.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    nomes.push(nome);
    localStorage.setItem("nomes", JSON.stringify(nomes)); // Salva a lista no localStorage
    atualizarLista();
    input.value = "";
    input.focus();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    nomes.forEach((nome, index) => {
        let item = document.createElement("li");
        item.textContent = nome;

        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "❌";
        botaoRemover.style.marginLeft = "10px";
        botaoRemover.onclick = () => removerAmigo(index);

        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}

function removerAmigo(index) {
    nomes.splice(index, 1);
    localStorage.setItem("nomes", JSON.stringify(nomes)); // Atualiza o localStorage
    atualizarLista();
}

function sortearAmigo() {
    if (nomes.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    let embaralhado = embaralhar([...nomes]);
    sorteio = {};

    embaralhado.forEach((pessoa, index) => {
        let amigo = embaralhado[(index + 1) % embaralhado.length];
        sorteio[pessoa] = amigo;
    });

    localStorage.setItem("sorteio", JSON.stringify(sorteio)); // Salva os pares no localStorage
    alert("Sorteio realizado com sucesso! Agora cada participante pode consultar seu amigo secreto.");
}

// Função para embaralhar a lista (algoritmo de Fisher-Yates)
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Função para consultar o amigo secreto individualmente
function consultarAmigo() {
    let inputConsulta = document.getElementById("consultaAmigo");
    let nome = inputConsulta.value.trim();

    if (!nome || !sorteio[nome]) {
        alert("Nome não encontrado no sorteio! Digite corretamente.");
        return;
    }

    alert(`Olá, ${nome}! Seu amigo secreto é: ${sorteio[nome]}`);
    inputConsulta.value = "";
}

// Função para resetar tudo e começar um novo sorteio
function resetarSorteio() {
    localStorage.removeItem("nomes");
    localStorage.removeItem("sorteio");
    nomes = [];
    sorteio = {};
    atualizarLista();
    alert("O sorteio foi resetado! Agora você pode adicionar novos participantes.");
}
