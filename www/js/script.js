window.onload = () => {
  const corPreta = document.querySelector('.color');
};

let cor = 'black';
let statusClick = 0;
let corOriginal = '';

// variaveis de desfazer e refazer

let desfazer = [];
let refazer = [];
let dadosCapturados1 = [];
let dadosCapturados = [];

// função para colorir pixel

function colorPixel(event) {
  // alimenta variavel desfazer e refazer
  let dadosPixels = document.querySelectorAll('.pixel')
  dadosPixels.forEach(elem => dadosCapturados1.push([elem.style.backgroundColor]))
  desfazer.push(dadosCapturados1)
  dadosCapturados1 = []
  refazer = []
  // 

  const pixel = event.target;
  pixel.style.backgroundColor = cor;
  statusClick = 1;
  if (pixel.style.border === 'white') {
    pixel.style.border = `1px solid ${cor}`
  }
  localStorage.setItem('item', document.querySelector('#pixel-board'))
}

// Função que monta o quadro de pixels

function layoutPixelBoard(larguraValor, alturaValor, gradeClass, linhaClass, pixelClass) {
  const elemento1 = document.querySelector(`#${gradeClass}`);
  // console.log(elemento.clientWidth)
  function geraQuadro(largura, altura) {
    for (let i = 0; i < largura; i += 1) {
      const linha = document.createElement('div');
      linha.className = `${linhaClass}`
      for (let i2 = 0; i2 < altura; i2 += 1) {
        const pixel = document.createElement('div');
        pixel.addEventListener('click', colorPixel);
        pixel.className = `${pixelClass}`
        pixel.style.backgroundColor = 'rgb(255, 255, 255)'
        pixel.style.width = `${(elemento1.clientWidth / largura) - 2}px`
        pixel.style.height = `${(elemento1.clientWidth / largura) - 2}px`
        linha.appendChild(pixel)
      }
    elemento1.appendChild(linha) 
    }
  }
  geraQuadro(larguraValor,alturaValor)
  elemento1.style.width = 'max-content'
      
}

layoutPixelBoard(localStorage.getItem('Largura'), localStorage.getItem('Altura'), 'pixel-board', 'linha', 'pixel');


//function limpaQuadro() {
//  const divPixel = document.getElementsByClassName('pixel');
//  for (let i = 0; i < divPixel.length; i += 1) {
//    divPixel[i].style.backgroundColor = 'rgb(255, 255, 255)';
//  }
//}


//const botaoClear = document.querySelector('#clear-board');
//botaoClear.addEventListener('click', limpaQuadro);

// função que remove contor de grade

function removeGrade() {
  const elemento1 = document.querySelector('#pixel-board');
  const pixel = document.querySelectorAll('.pixel');
  pixel.forEach((elemento) => {
      const checkBorder = elemento.style.border === 'none';
      if (checkBorder) {
        elemento.style.width = `${(elemento1.clientWidth / localStorage.getItem('Largura')) - 2}px`;
        elemento.style.height = `${(elemento1.clientWidth / localStorage.getItem('Largura')) - 2}px`;
        elemento.style.border = '1px solid rgb(133, 133, 133)';
      } else {
        elemento.style.width = `${elemento1.clientWidth / localStorage.getItem('Largura')}px`;
        elemento.style.height = `${elemento1.clientWidth / localStorage.getItem('Largura')}px`;
        elemento.style.border = 'none';
        elemento1.style.width = 'max-content';
      }
  }) 
}

const botao = document.querySelector('#visao');
botao.addEventListener('click', removeGrade);

// Função de desfazer e refazer


let sistemaDR = (event) => {
  let dadosPixels = document.querySelectorAll('.pixel')
  if(event.target.className.animVal === 'bi bi-arrow-90deg-left icone-desfazer') {
    if (desfazer.length > 0) {
      dadosPixels.forEach(elem => dadosCapturados.push(elem.style.backgroundColor))
      refazer.unshift(dadosCapturados)
      dadosCapturados = []
      dadosPixels.forEach((elem, index) => {
      elem.style.backgroundColor = desfazer[desfazer.length - 1][index]
      // console.log(desfazer[desfazer.length - 1][0])
    })
    desfazer.splice(-1, 1)
    // console.log(refazer)
    }

  } else if (event.target.className.animVal === 'bi bi-arrow-90deg-right icone-refazer') {
    
    if (refazer.length > 0) {
      dadosPixels.forEach(elem => dadosCapturados1.push([elem.style.backgroundColor]))
      desfazer.push(dadosCapturados1)
      dadosCapturados1 = []

      dadosPixels.forEach((elem, index) => {elem.style.backgroundColor = refazer[0][index]})
      refazer.splice(0, 1)
    }

  }
}

const btnDesfazer = document.querySelector('#btn-desfazer');
const btnRefazer = document.querySelector('#btn-refazer');

btnDesfazer.addEventListener('click', sistemaDR)
btnRefazer.addEventListener('click', sistemaDR)

//


let colorIndicador = document.querySelector('#color-indicador');
const seletorCor = document.querySelector('#seletor')
const colorPicker = new iro.ColorPicker('#color-piker-circulo', {
  color: "rgb(255, 0, 0)",
  borderWidth: 2,
  borderColor: "#fff",
  layout: [
    {
      component: iro.ui.Box,
    },
    {
      component: iro.ui.Slider,
      options: {
        id: 'hue-slider',
        sliderType: 'hue',
      }
    }
  ]
  
});

colorPicker.on('color:change', function(color){
  colorIndicador.style.backgroundColor = color.hexString;
  seletorCor.style.backgroundColor = color.hexString;
  cor = color.hexString;
})

const modalColor = document.querySelector('#modal-pickerColor')
const btnOk = document.querySelector('#paleta')
function mostraOcultaModal () {
  if (modalColor.style.display === 'none') {
    modalColor.style.display = 'block'
  } else {
    modalColor.style.display = 'none'
  }
}

seletorCor.addEventListener('click', mostraOcultaModal)
btnOk.addEventListener('click', mostraOcultaModal)
