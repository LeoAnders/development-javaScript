 function pessoa() {
   this.idade = 0

   setInterval(() =>{
     this.idade++
     console.log(this.idade);
 },2000)

 }

 new pessoa 