const prompt = require('prompt-sync')();

let cadena = prompt("Intrduce una cadena donde aparezca tres veces 'mesa': ");
let posMesa1 = cadena.indexOf("mesa");
let posMesa2 = cadena.indexOf("mesa", posMesa1 + 4 /* length de mesa */);
let posMesa3 = cadena.lastIndexOf("mesa");

console.log("La primera mesa esta en posicion", posMesa1 + 1, "la segunda en", posMesa2 + 1, "y l tercera en", posMesa3 + 1);
