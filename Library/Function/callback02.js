
const notas = ["8.0","9.5","4.5","7.0","10.0","6.5"]
// Sem callback

const notasBaixas1 = []
for (let i in notas){
   if(notas[i] <7){
      notasBaixas1.push(notas[i])
   }
}

console.log(notasBaixas1);

// com callback
const notasBaixas2 = notas.filter(nota => {
   return nota < 7
})

console.log(notasBaixas2);
