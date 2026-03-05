const prompt = require('prompt-sync')();
const PI = 3.1416

let r = parseFloat(prompt("Radio del circulo: "));

console.log("El area es", PI * r**2);