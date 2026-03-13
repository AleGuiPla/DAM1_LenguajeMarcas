const prompt = require('prompt-sync')();

let cadena = prompt("Intrduce una cadena de caracteres: ");
let index = parseInt(prompt("Dame una posicion de esa cadena: "));

console.log("El caracter en posición", index, "es", cadena.at(index + 1));
