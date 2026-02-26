const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Dame un numero decimal "));
let numero2 = parseFloat(prompt("Dame oteo número decimal "));

let resultado = numero1 + numero2;
console.log("Su suma es:", resultado);
resultado = numero1 - numero2;
console.log("Su diferencia es:", resultado);
resultado = numero1 * numero2;
console.log("Su producto es:", resultado);
resultado = numero1 / numero2;
console.log("Su cociente es:", resultado);