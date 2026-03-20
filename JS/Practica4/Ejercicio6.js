const prompt = require('prompt-sync')();

let cadena = prompt("Introduce una cadena de texto: ");
let inicio = parseInt(prompt("Posicion inicial: "));
let final = parseInt(prompt("Posicion final: "));

if ((inicio < 1 || inicio > cadena.length)
    || (final < inicio || final > cadena.length)) {
    console.log("ERROR");
} else {
    console.log("La subcadena es", cadena.substring(inicio - 1, final - 1));
}