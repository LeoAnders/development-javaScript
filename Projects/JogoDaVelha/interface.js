
//DOMContentLoaded e executado quando o documento for carregado
document.addEventListener("DOMContentLoaded",() =>{

  let cells = document.querySelectorAll(".cell")

    cells.forEach((cell) => {
    cell.addEventListener("click", handleClick)
  })

})


function handleClick(event){

  let cell = event.target
  let position = cell.id

  
  if (handleMove(position)) {
    setTimeout(() => {
      if (playerTime === 0) {
        return alert("Fim de jogo! - O Vencedor foi o O");
      } else {
        return alert("Fim de jogo! - O Vencedor foi o X");
      }
    }, 10);
  }
  updateCells(position);
  
}

//Reiniciar jogo
const btn = document.querySelector("#refresh")

btn.addEventListener("click", () => {
  location.reload()
})

function updateCells(position) {
  let cell = document.getElementById(position.toString());
  let symbol = board[position];
  cell.innerHTML = `<div class='${symbol}'></div>`;
}

