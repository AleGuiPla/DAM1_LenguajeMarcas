const prompt = require('prompt-sync')();

let numero = prompt("Numero del 1 al 7: ");
let diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

if (numero < 1 || numero > 7) {
    console.log("ERROR");
} else {
    console.log("El numero", numero, "corresponde con el dia de la semana", diasSemana[numero - 1]);
}