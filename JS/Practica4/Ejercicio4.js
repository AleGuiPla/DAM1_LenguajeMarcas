const prompt = require('prompt-sync')();

let nota = prompt("Calificacion de 0 a 10: ");
let calificacion;

if (nota < 5) {
    calificacion = "suspenso";
} else if (nota < 6) {
    calificacion = "aprobado";
}  else if (nota < 7) {
    calificacion = "bien";
} else if (nota < 9) {
    calificacion = "notable";
} else if (nota < 10) {
    calificacion = "sobresaliente";
} else if (nota = 10) {
    calificacion = "matricula de honor";
}

console.log("Tu calificacion se corresponde con un", calificacion);
