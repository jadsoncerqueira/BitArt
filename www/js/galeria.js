document.querySelector('#largura').focus()
// Função que gera itens para galeria

function galeriaItens(quant) {
    for (let i = 0; i < quant; i += 1) {
        let galeria = document.querySelector('#galeria');
    
      let itensGaleria = document.createElement('div');
      let fotosGaleria = document.createElement('div');
      let informacoesGaleria = document.createElement('div');
      let editarGaleria = document.createElement('div');
      let imgEditarGaleria = document.createElement('img');
    
      let informacoesTitulo = document.createElement('h2');
      let informacoesTamanho = document.createElement('p');
      let informacoesModificado = document.createElement('p');
    
      informacoesTitulo.innerText = 'Sem Titulo';
      informacoesTamanho.innerText = 'Tamanho:';
      informacoesModificado.innerText = 'Modificado:';
    
      itensGaleria.className = 'itens';
      fotosGaleria.className = 'fotos-itens';
      informacoesGaleria.className = 'informacoes-itens';
      editarGaleria.className = 'editar-titulo-itens';
    
      imgEditarGaleria.src = "./img/icon-lapis.png";
      imgEditarGaleria.className = 'icon-editar-itens'
    
      itensGaleria.appendChild(fotosGaleria);
      itensGaleria.appendChild(informacoesGaleria);
    
      informacoesGaleria.appendChild(informacoesTitulo)
      informacoesGaleria.appendChild(informacoesTamanho)
      informacoesGaleria.appendChild(informacoesModificado)
    
      editarGaleria.appendChild(imgEditarGaleria);
      itensGaleria.appendChild(editarGaleria);
    
      galeria.appendChild(itensGaleria)
    }
}
galeriaItens(20)

// Função ativa visualização de modal

const marcaCaixa = (event) => {
  let checa = checkBox.checked
  if (checa) {
    checkBox.checked = false
  } else {
    checkBox.checked = true
  }
  document.querySelector('#largura').focus()
}

let botaoAdciona = document.querySelector('#btn-adicionar')
let checkBox = document.querySelector('#ativa-desativa-modal')
botaoAdciona.addEventListener('click', marcaCaixa)

// Função que desativa visualização de modal

let fechatelaPop = (ite) => {
  let ch = ite.target.className === 'telaPop'
  if (ch) {
    checkBox.checked = false
  }
}
const telaPopUp = document.querySelector('#tela-popup');
telaPopUp.addEventListener('click', fechatelaPop)

// Função que gera quadro a partir de dados digitados

function geraQuadro() {
  localStorage.setItem('Largura', document.querySelector('#largura').value)
  localStorage.setItem('Altura', document.querySelector('#altura').value)
  window.location.href = './pages/Area Principal/index.html'
  checkBox.checked = false
 }
 
 const botaoGerar = document.querySelector('#botao-criar-grade');
 botaoGerar.addEventListener('click', geraQuadro);



