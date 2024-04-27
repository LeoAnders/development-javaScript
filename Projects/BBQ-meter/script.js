//window "Modal"
//Open Modal 
let openModalButton = document.querySelector("#open-modal")
let closeModalButton = document.querySelector("#close-modal")
let modal = document.querySelector("#modal")
let fade = document.querySelector("#fade")

//create function
let toggleModal = () => {
    modal.classList.toggle("hide")
    fade.classList.toggle("hide")
}
//create array
//forEach percorre todos os itens de um array, tal como o loop for normal
[openModalButton, closeModalButton, fade].forEach((Element)=> {
    Element.addEventListener("click", () =>toggleModal())

})

//Calculate Barbecue.

let inputAdults = document.querySelector("#input-adults")
let inputKids = document.querySelector("#input-kids")
let inputDuration = document.querySelector("#input-duration")
let result = document.querySelector(".result-bbq")

function calculate(){
    
    let adults = inputAdults.value
    let kids = inputKids.value
    let duration = inputDuration.value

   
    let totalMeat = meatPP(duration) * adults + (meatPP(duration) /2 * kids)
    let totalBeer = beerPP(duration) * adults
    let totalSoda = sodaPP(duration) * adults + (sodaPP(duration) /2 * kids)

    //"+" antes do "=" indica que ir imprimir mais de um innerHTML
    result.innerHTML =  `<p>${totalMeat /1000} kg de carne.</p>`
    result.innerHTML += `<p>${Math.ceil(totalBeer /355)} latas de cerveja.</p>`
    result.innerHTML += `<p>${Math.ceil(totalSoda /2000)} litros de refrigerante.</p>`

}

function meatPP(duration){

    if(duration >=6){
        return 650
    }else{
        return 400
    }
}

function beerPP(duration){
    if(duration >=6){
        return 2000
    }else{
        return 1200
    }
}

function sodaPP(duration){
    if(duration >=6){
        return 1500
    }else{
        return 1000
    }
}