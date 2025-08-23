// Trocar Fundo 
function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./img/ena.jpg");
  } else {
    img.setAttribute("src", "./img/ena.jpg");
  }
}

// Botão um pouco sobre mim 
const botao = document.getElementById("undertale");
const dialogo = document.getElementById("dialogo");
const textoEl = document.getElementById("texto");

const textoSobre = "Oi! Eu sou o Leonardo, tenho 15 anos e gosto de programação, jogos, design e música. Curso ADS na Etec de Embu e estou criando meu portfólio para mostrar meus projetos e compartilhar um pouco de quem eu sou! :)";

let i = 0;

botao.addEventListener("click", () => {
  dialogo.classList.remove("escondido"); // mostra a caixa
  textoEl.innerHTML = ""; // limpa antes
  i = 0;
  digitar();
  dialogo.scrollIntoView({ behavior: "smooth" }); // rola até o diálogo
});

function digitar() {
  if (i < textoSobre.length) {
    textoEl.innerHTML += textoSobre.charAt(i);
    i++;
    setTimeout(digitar, 35); // velocidade da digitação
  }
}
