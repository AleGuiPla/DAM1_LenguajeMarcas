const prompt = require('prompt-sync')();

let numero = prompt("Numero: ");

console.log(numero % 2 == 0 ? "Es par" : "Es impar");