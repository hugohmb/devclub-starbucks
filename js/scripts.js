// Seleção de elementos
const circulo = document.querySelector(".circulo");
const imagemCopo = document.querySelector(".starbucks");
const botoes = document.querySelectorAll(".botao-menu");
const textoCaixa = document.querySelector(".caixa-texto p"); // Seleciona apenas o parágrafo <p>

let corFixada = "#017143";
let imagemFixada = "img/img1.png";
let textoFixado = "Fundada em 1971, em Seattle, a Starbucks se tornou uma das marcas mais reconhecidas no mundo quando o assunto é café. Com uma proposta que vai além da bebida, a empresa transformou o simples ato de tomar café em uma experiência acolhedora, valorizando a conexão entre pessoas e o ambiente em que estão. Seja para uma pausa no dia a dia ou um momento de inspiração, a Starbucks busca oferecer mais do que uma xícara de café: uma experiência memorável."; // Texto padrão

// Inicializando com os valores padrão
circulo.style.background = corFixada;
imagemCopo.src = imagemFixada;
textoCaixa.innerHTML = textoFixado; // Define o texto inicial do <p>

// Transição suave da imagem
imagemCopo.style.transition = "opacity 0.3s ease";

// Funções principais
function mostrarTemporario(cor, imagem, texto) {
    circulo.style.background = cor;
    imagemCopo.style.opacity = 0;
    textoCaixa.style.opacity = 0; // Diminuir a opacidade do texto
    setTimeout(() => {
        imagemCopo.src = imagem;
        imagemCopo.style.opacity = 1;
        textoCaixa.innerHTML = texto; // Atualiza o texto do <p>
        textoCaixa.style.opacity = 1; // Restaura a opacidade do texto
    }, 150);
}

function voltarFixado() {
    mostrarTemporario(corFixada, imagemFixada, textoFixado);
}

function fixar(cor, imagem, texto, elemento) {
    corFixada = cor;
    imagemFixada = imagem;
    textoFixado = texto;
    botoes.forEach(btn => btn.classList.remove("ativo")); // Remove a classe ativo dos outros botões
    elemento.classList.add("ativo"); // Adiciona a classe ativo ao botão clicado
    mostrarTemporario(cor, imagem, texto); // Mostra a alteração
}

// Loop para adicionar os eventos aos botões
botoes.forEach(botao => {
    const cor = botao.dataset.cor;
    const imagem = botao.dataset.img;
    const texto = botao.dataset.texto; // Texto que será alterado

    botao.addEventListener("mouseenter", () => {
        mostrarTemporario(cor, imagem, texto); // Exibe a alteração temporária no hover
    });

    botao.addEventListener("mouseleave", () => {
        voltarFixado(); // Retorna ao estado fixo quando o mouse sai
    });

    botao.addEventListener("click", () => {
        fixar(cor, imagem, texto, botao); // Fixar o estado no clique
    });
});
