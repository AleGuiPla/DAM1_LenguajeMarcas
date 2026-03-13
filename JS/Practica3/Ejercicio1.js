const prompt = require('prompt-sync')();

let year = parseInt(prompt("Introduce tu año de nacimiento: "));
let month = parseInt(prompt("Introduce tu mes de nacimiento: "));
let day = parseInt(prompt("Introduce tu día de nacimiento: "));

let fecha = new Date(year, month - 1, day);

console.log("0 - Domingo, 1 - Lunes, 2 - Martes, 3 - Miércoles, 4 - Jueves, 5 - Viernes, 6 - Sábado");
console.log("El dia de tu nacimiento cae en el dia de la semana", fecha.getDay());