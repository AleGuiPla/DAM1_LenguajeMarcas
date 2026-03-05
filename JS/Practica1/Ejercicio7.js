const prompt = require('prompt-sync')();

console.log("Piensa en un numero... multiplícalo por 3, súmale 6 y dividelo entre dos y al final resta uno");
let num = parseFloat(prompt("Introduce el numero obtenido:"))

let numInicial = (((num + 1) * 2) - 6) / 3;

console.log("El numero incial es ", numInicial);