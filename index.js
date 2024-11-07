import versos from "./versiculos.js";  // Correto, importando os versículos

function getVersos() {
  // Escolher um versículo aleatório do array de objetos
  const randomVerso = versos[Math.floor(Math.random() * versos.length)];
  
  // Exibir o texto do versículo
  const versiculoText = randomVerso.versiculo;
  const livroText = randomVerso.livro;
  const capituloText = randomVerso.capitulo;
  const versoText = randomVerso.versiculo_num;
  document.getElementById('container-versos').textContent = versiculoText; 
  document.getElementById('container-autor').innerHTML = `<span class="versiculo-text">${livroText}</span> ${capituloText}:${versoText}`; 
}

window.onload = getVersos;
