
//pegar imagem externa
async function getExternalImage() {
  //A API fetch provê ao navegador uma interface para a execução de requisições HTTP através de Promises.
    const response = await fetch('https://source.unsplash.com/random')
  
    document.querySelector(".image")
    .innerHTML = `<img src = "${response.url}">`
  
  }
  //Quando rodar essa função, ela vai me gerar a imagem
  getExternalImage()
  
  //clicar ano no botão, pegar imagem externa
  document.querySelector('button').onclick = function() {
    getExternalImage()
  //essa função gera uma imagem externa  
  } 
  
  //clicar na imagem
  //salvar no local storage

