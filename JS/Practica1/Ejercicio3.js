const prompt = require('prompt-sync')();

let base = parseFloat(prompt("Numero como base de la potencia: "));
let exponente = parseFloat(prompt("Numero como exponente de la potencia: "));

let potencia = base * exponente;

console.log(base, "elevado a", exponente, "=", potencia);
