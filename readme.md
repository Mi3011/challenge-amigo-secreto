# 🎁 **Amigo Secreto - Sorteio Interativo**

Este projeto tem como objetivo criar um sorteio de **amigo secreto** de forma simples e divertida, onde os participantes podem adicionar seus nomes, ver seus amigos secretos individualmente e até resetar o sorteio quando desejado. O sistema mantém os dados persistentes no navegador utilizando o **localStorage**, garantindo que os dados não se percam ao recarregar a página.

---

## 🚀 **Funcionalidades**

- **Adicionar participantes**: Insira os nomes dos participantes na lista de sorteio.
- **Sortear amigo secreto**: Realize o sorteio com um clique e, depois, cada participante pode consultar apenas o seu amigo secreto.
- **Persistência de dados**: O sistema usa o **localStorage** para armazenar os nomes e o sorteio, garantindo que as informações não se percam ao recarregar a página.
- **Consultar amigo secreto**: Cada participante pode digitar seu nome e descobrir quem será seu amigo secreto, sem ver a lista inteira.
- **Resetar sorteio**: O administrador pode resetar o sorteio e limpar todos os dados para realizar um novo sorteio com outros participantes.
- **Interface Responsiva**: O layout foi atualizado para melhor experiência em dispositivos móveis e desktops.

---

## 🔧 **Tecnologias Usadas**

- **HTML**: Estrutura do conteúdo da página.
- **CSS**: Estilos visuais para a interface.
- **JavaScript**: Lógica do sorteio, manipulação de eventos e persistência no navegador.

---

## 📦 **Instalação**

1. **Clone o repositório** ou baixe os arquivos diretamente.
   ```bash
   git clone https://github.com/seu-usuario/amigo-secreto.git
   ```
2. **Abra o arquivo HTML no seu navegador** para visualizar a aplicação funcionando.

---

## 🖥️ **Como Usar**

### **Adicionar participantes:**
- Digite os nomes dos seus amigos no campo de entrada.
- Clique em **Adicionar** para incluir cada participante na lista.

### **Sortear amigo secreto:**
- Após adicionar pelo menos dois nomes, clique no botão **Sortear amigo**.
- Cada participante pode consultar seu amigo secreto digitando seu nome na caixa de consulta.

### **Consultar amigo secreto:**
- No campo de consulta, digite o seu nome.
- Clique em **Ver meu amigo secreto** para descobrir quem você tirou.

### **Resetar o sorteio:**
- O administrador pode clicar em **Resetar sorteio** para apagar todos os participantes e iniciar um novo sorteio.

---

## 💻 **Como Funciona**

- **Adição de participantes**: Quando um nome é inserido, ele é armazenado no **localStorage**, permitindo que os dados sejam recuperados ao recarregar a página.
- **Sorteio de amigo secreto**: O sistema embaralha a lista de participantes e gera os pares de amigo secreto, armazenando o resultado no **localStorage**.
- **Consulta individual**: Quando um participante consulta seu nome, ele recebe apenas o nome do seu amigo secreto, sem ver os demais.
- **Resetando o sorteio**: O administrador pode apagar todos os dados armazenados e começar um novo sorteio do zero.

---

## 📌 **Notas Importantes**

- O sorteio **não é visível para todos os participantes ao mesmo tempo**. Cada pessoa vê apenas o seu próprio amigo secreto.
- O projeto depende do **localStorage**, ou seja, os dados são salvos apenas no navegador e podem ser perdidos ao limpar o cache.
- Para iniciar um novo sorteio, clique em **Resetar sorteio**, o que removerá todos os dados salvos.

---

## 👨‍💻 **Contribuindo**

Se você deseja contribuir com este projeto, siga os passos abaixo:

1. **Fork o repositório**.
2. **Crie uma nova branch** para sua feature ou correção de bug.
3. **Faça as alterações** e envie um **Pull Request**.

---

## 👤 **Autores**

- [Michele NUnes]

---

## 📝 **Licença**

Este projeto é de código aberto e está sob a **Licença MIT**.

---

🎉 **Divirta-se sorteando o seu amigo secreto!**

