let colocarX = true;

const colocarSimbolo = (casa) => {
  // const casa = document.querySelector(id) 
  if (!casa.classList.contains("select")) {
    if(colocarX) {
      const xis = document.createElement('p')
      xis.classList.add("simbolo")
      xis.innerText = "X"
      casa.appendChild(xis)
      casa.classList.add("select")
    } else {
      const bola = document.createElement('p')
      bola.classList.add("simbolo")
      bola.innerText = "O"
      casa.appendChild(bola)
      casa.classList.add("select")
    }
    colocarX = !colocarX
    console.log(colocarX)
  }
}

const criartabuleiro = () => {
  const tabuleiro = document.querySelector("#tabuleiro");
  let id = 0;
  for (let ind=0; ind < 3; ind++) {
    const linha = document.createElement('div');
    linha.classList.add("linha")
    for (let index=0; index < 3; index++) {
      const casa = document.createElement('div');
      casa.classList.add('casa');
      casa.setAttribute('id', (id+index))
      casa.addEventListener('click', () => colocarSimbolo(casa))
      linha.appendChild(casa)
    }
    id += 3;
    tabuleiro.appendChild(linha);
  }
}

window.onload = function() {
  criartabuleiro();
}
