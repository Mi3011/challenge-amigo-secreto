let nomes = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    nomes.push(nome);
    atualizarLista();
    input.value = ""; // Limpa o campo após adicionar
    input.focus(); // Mantém o foco no campo para facilitar a digitação
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    for (let i = 0; i < nomes.length; i++) {
        let item = document.createElement("li");
        item.textContent = nomes[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (nomes.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    let sorteio = embaralhar([...nomes]); // Chama a função de embaralhar corretamente
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa os resultados anteriores

    for (let i = 0; i < sorteio.length; i++) {
        let amigo = sorteio[(i + 1) % sorteio.length]; // Garante que não sorteia a si mesmo
        let item = document.createElement("li");
        item.textContent = `${sorteio[i]} → ${amigo}`;
        resultado.appendChild(item);
    }
}

// Definição da função para embaralhar (estava faltando ou fora do escopo correto)
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos de posição
    }
    return array;
}
