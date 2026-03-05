const prompt = require('prompt-sync')();

let chicos = parseInt(prompt("Numero de chicos en clase: "));
let chicas = parseInt(prompt("Numero de chicos en clase: "));

let cantChicos = chicos * 100 / (chicos + chicas);
let cantChicas = 100 - cantChicos;

console.log("Hay un", cantChicos + "%", "de chicos");
console.log("Hay un", cantChicas + "%", "de chicas");