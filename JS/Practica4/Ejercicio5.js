const prompt = require('prompt-sync')();

let cadena = prompt("Introduce una cadena de texto: ");
let index = parseInt(prompt("Posicion en la cadena: "));

if (index < 1 || index > cadena.length) {
    console.log("ERROR");
} else {
    console.log("El carácter en posicion", index, "es", cadena.charAt(index - 1));
    
}