
let nota = 7.5;

if (nota < 5) {
  console.log("Você foi reprovado.");
} else if (nota >= 5 && nota < 7) {
  console.log("Você ficou de recuperação.");
} else if (nota >= 7 && nota < 9) {
  console.log("Você foi aprovado.");
} else if (nota >= 9 && nota <= 10) {
  console.log("Você foi aprovado com distinção!");
} else {
  console.log("Nota inválida.");
}