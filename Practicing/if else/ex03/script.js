

function btnResult(){

    const numberOne = parseInt(document.querySelector("#numberOne").value)
    const numberTwo = parseInt(document.querySelector("#numberTwo").value)
    const numberThree = parseInt(document.querySelector("#numberThree").value)
    const result = document.querySelector("#resultOfNumbers");
 
    
     if(numberOne > numberTwo && numberOne > numberThree){
 
         result.innerHTML = `O número ${numberOne} é maior que ${numberTwo} e ${numberThree}.`
 
     }else if(numberTwo > numberOne && numberTwo > numberThree ){
 
         result.innerHTML = `O número ${numberTwo} é maior que ${numberOne} e ${numberThree}.`
 
     }else{
 
         result.innerHTML = `O número ${numberThree} é maior que ${numberOne} e ${numberTwo}.`
 
     }
 
 }