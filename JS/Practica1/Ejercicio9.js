const prompt = require('prompt-sync')();

let cantTotal = parseFloat(prompt("Introduce la cantidad a repartir:"))
let reparto1 = parseFloat(prompt("Introduce la primerta cantidad entre la que repartir:"))
let reparto2 = parseFloat(prompt("Introduce la segunda cantidad entre la que repartir:"))
let reparto3 = parseFloat(prompt("Introduce la tercera cantidad entre la que repartir:"))

const constanteRepartir = cantTotal / (1 / reparto1 + 1 / reparto2 + 1 / reparto3);

let cantRepartoFinal1 = constanteRepartir / reparto1;
let cantRepartoFinal2 = constanteRepartir / reparto2;
let cantRepartoFinal3 = constanteRepartir / reparto3;

console.log("A la cantidad", reparto1, "le corresponde:", cantRepartoFinal1);
console.log("A la cantidad", reparto2, "le corresponde:", cantRepartoFinal2);
console.log("A la cantidad", reparto3, "le corresponde:", cantRepartoFinal3);
