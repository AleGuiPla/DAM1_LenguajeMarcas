const prompt = require('prompt-sync')();

let numero = prompt("Numero: ");

if (numero == 0) {
    console.log("Es cero");
} else if (numero > 0) {
    console.log("Es positivo")
} else {
    console.log("Es negativo");
}