const prompt = require('prompt-sync')();

let day = parseInt(prompt("Introduce un día: "));

let fechaFutura = new Date();
fechaFutura.setDate(fechaFutura.getDate() + day);

console.log("Dentro de", day, "dias, será", fechaFutura);
