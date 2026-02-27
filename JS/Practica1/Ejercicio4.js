const prompt = require('prompt-sync')();

let base = parseFloat(prompt("Numero como base de la potencia: "));
let altura = parseFloat(prompt("Numero como exponente de la potencia: "));

let area = base * altura;

console.log("El area es", area);