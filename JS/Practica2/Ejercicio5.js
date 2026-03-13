const prompt = require('prompt-sync')();

let cadena = prompt("Intrduce una cadena: ");
let indexInicio = parseInt(prompt("Introduce el inicio del subtring: "));
let indexFinal = parseInt(prompt("Introduce el final del subtring: "));

cadena = cadena.substring(indexInicio - 1, indexFinal - 1);

console.log(cadena);
