const prompt = require('prompt-sync')();

let year = parseInt(prompt("Introduce un año: "));
let month = parseInt(prompt("Introduce un mes: "));
let day = parseInt(prompt("Introduce un día: "));

let fechaFutura = new Date(year, month - 1, day);
let fechaAct = new Date();

console.log("Quedan", Math.ceil((fechaFutura - fechaAct) / 1000 / 60 / 60 / 24), "días para la fecha futura");
