
const criartabuleiro = () => {
  const tabuleiro = document.querySelector("#tabuleiro");

  for (let ind=0; ind < 3; ind++) {
    const linha = document.createElement('div');
    linha.classList.add("linha")
    for (let index=0; index < 3; index++) {
      const casa = document.createElement('div');
      casa.classList.add('casa');
      linha.appendChild(casa)
    }
    tabuleiro.appendChild(linha);
  }
}

window.onload = function() {
  criartabuleiro();
}
