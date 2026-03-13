const prompt = require('prompt-sync')();

let cadena = prompt("Intrduce una cadena donde aparezca dos veces 'mesa': ");
let posMesa1 = cadena.indexOf("mesa");
let posMesa2 = cadena.lastIndexOf("mesa");

console.log("La primera mesa esta en posicion", posMesa1 + 1, "y la segunda en", posMesa2 + 1);
