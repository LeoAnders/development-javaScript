// Leia um nome de usuário e a sua senha 
// Não aceitar a senha igual ao nome do usuário
// mostrar uma mensagem de erro e voltando a pedir as informações.

    
 let user = prompt("introduza um nome de Usuário")
 let password = prompt("introduza uma senha ")

 while(user === password){
   
    alert("Seu usuário e senha nao podem estar iguais ")
    password = prompt("Introduza uma nova senha")
 }

 if(user != password){

    alert("Usuário cadastrado com sucesso")
 }

