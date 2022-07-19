let colocarX = true;
let xisSelecionados = [];
let bolaSelecionados = [];
const posicaoVencedoras = [
  ["0","1","2"],
  ["3","4","5"],
  ["6","7","8"],
  ["0","3","6"],
  ["1","4","7"],
  ["2","5","8"],
  ["0","4","8"],
  ["6","4","2"],
];

const verificar = (data, simbolo) => {
  const ganhou = posicaoVencedoras.some((array) =>
    array.every((item) => 
      data.includes(item)
    )
  )
  if (ganhou) {
    const body = document.querySelector("#body")
    const textoGanhador = document.createElement('p')
    textoGanhador.classList.add("textoGanhador")
    textoGanhador.innerText = `Jogador ${simbolo} Ganhou!!!`
    body.appendChild(textoGanhador);
  }
}

const testeSeGanhou = (simbolo, id) => {
  switch(simbolo) {
    case "xis":
      xisSelecionados.push(id)
      verificar(xisSelecionados, "X")
      break;
    case "bola":
      bolaSelecionados.push(id)
      verificar(bolaSelecionados, "O")
      break;
    default:
      console.log("ERRO!!!")
      break;
    }
}

const colocarSimbolo = (casa) => {
  if (!casa.classList.contains("select")) {
    if(colocarX) {
      const xis = document.createElement('p')
      xis.classList.add("simbolo")
      xis.innerText = "X"
      casa.appendChild(xis)
      casa.classList.add("select")
      testeSeGanhou('xis', casa.id)
    } else {
      const bola = document.createElement('p')
      bola.classList.add("simbolo")
      bola.innerText = "O"
      casa.appendChild(bola)
      casa.classList.add("select")
      testeSeGanhou('bola', casa.id)
    }
    colocarX = !colocarX
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
