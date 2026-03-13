const prompt = require('prompt-sync')();

let cadena = prompt("Introduce una cadena de texto formada por tres palabras en minúsculas: ");
let palabras = cadena.split(/\s/);
let cadenaFinal = "";

for(i = 0; i<palabras.length; i++) {
    cadenaFinal += palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1) + " ";
}

console.log(cadenaFinal);