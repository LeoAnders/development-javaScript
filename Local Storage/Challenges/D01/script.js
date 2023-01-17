//invés de iniciar com array vazio eu inicio com localStorage
//na primeira vez que executar o getItem, ele nao existe então colocamos o || com um array vazio []
//Apos teremos que converter o localStorage que e uma string para um array 
let favorites = JSON.parse(localStorage.getItem("favorites")) || []
//Parse e um argumento de json

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
document.querySelector('button').onclick = function () {
  getExternalImage()
  //essa função gera uma imagem externa  
}

//clicar na imagem
document.querySelector(".image").onclick = function () {
  //efeito visual da estrela   
  const imageContainer = document.querySelector('.image')
  //salvar no local storage, ou remover
  const imageSource = document.querySelector(".image img").src
  //dentro de image tem a tag "img" e temos o Source da imagem
  //apos isso e so guardar no local storage


  //se esta no localStorage remover
  //image source vai procurar dentro dos favoritos dele se tem uma imageSource
  const index = favorites.indexOf(imageSource)
  if (index != -1) {
    //splice espera dois argumentos, qual a posição do array que ele quer que tire'index'
    //e quantos argumentos a partir daquela posição ele quer que eu delete       
    favorites.splice(index, 1)
    imageContainer.classList.remove("fav")

  } else {
    favorites.push(imageSource)
    imageContainer.classList.add("fav")

  }

  localStorage.setItem('favorites', JSON.stringify(favorites))
  //favorites e um nome do meu item que vai conter varias imagens 
  //apos teremos que criar um array para armazenar todas as urls das imagens 


}


