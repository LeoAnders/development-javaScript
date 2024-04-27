

//nome
let nome = "" ;
    while(nome.length <= 3){
     nome = prompt("Digite seu nome:")
    
     if(nome.length <=3){
     alert("O nome deve ter mais de 3 caracteres. Digite novamente")
     }
    
} 

//idade
let age = 0 ;
     while(age <=0 || age >= 150){
     age = prompt("Digite sua idade")
     age = parseInt(age)
     
     if(age <=0 ||  age >= 150){
     alert("idade deve ser menor de 150  por favor digite novamente")  
     }
     
          
     }
//salario     

let wage = 0 ;
     while( wage <= 0){
     wage = prompt("Qual seu salario ? ")
     wage = parseFloat(wage)

     if( wage <= 0 || isNaN(wage)){ // adiciona uma verificação adicional para garantir que o usuário insira um número válido
     alert("O salario deve ser maior que 0, por favor digite novamente")    
     }
    
      
}

//Gênero
let gender = "" ;
    while(gender !=="f" && gender !=="m"){
     gender = prompt("Qual seu gênero  'f' ou 'm'; ? ")

     if(gender !=="f" && gender !=="m"){
     alert("seu argumento nao corresponde a F e M,  por favor digite novamente" )
     }
    
        
}

//Estado civil
let maritalStatus = "" ;
     while(maritalStatus !=="s" && 
           maritalStatus !=="c" &&
           maritalStatus !=="v" &&
           maritalStatus !=="d"){
     maritalStatus = prompt("Qual seu estado civil: 's', 'c', 'v', 'd'.?  ")   
     
     if(maritalStatus !=="s" && 
        maritalStatus !=="c" &&
        maritalStatus !=="v" &&
        maritalStatus !=="d") {
     alert("Seu argumento digitado nao corresponde a: 's', 'c', 'v', 'd'")
        }
       

}

//Mensagem final
alert(`Prazer em lhe conhecer ${nome}, seus dados prescritos são: idade: 
${age},  Salario: ${wage}, gênero: ${gender}, estado civil: ${maritalStatus} `) 





