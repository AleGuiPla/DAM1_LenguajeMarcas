const prompt = require('prompt-sync')();
const DIAS_MESES = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


let year = parseInt(prompt("Introduce tu año de nacimiento: "));
let month = prompt("Introduce tu mes de nacimiento (Nombre): ");
let day = parseInt(prompt("Introduce tu día de nacimiento: "));

if (month.toLowerCase()  == "enero") {
    month = 0;
} else if (month.toLowerCase() == "febrero") {
    month = 1;
} else if (month.toLowerCase()  == "marzo") {
    month = 2;
} else if (month.toLowerCase()  == "abril") {
    month = 3;
} else if (month.toLowerCase()  == "mayo") {
    month = 4;
} else if (month.toLowerCase()  == "junio") {
    month = 5;
} else if (month.toLowerCase()  == "julio") {
    month = 6;
} else if (month.toLowerCase()  == "agosto") {
    month = 7;
} else if (month.toLowerCase()  == "septiembre") {
    month = 8;
} else if (month.toLowerCase()  == "octubre") {
    month = 9;
} else if (month.toLowerCase()  == "noviembre") {
    month = 10;
} else if (month.toLowerCase()  == "diciembre") {
    month = 11;
} else {
    console.log("ERROR");
    month = 0;
}

if (month = 1 && day == 29) {
    if(!((Y % 4 == 0 && Y % 100 != 0) || (Y % 400 == 0))) {
        console.log("ERROR");
    }
} else if(day > DIAS_MESES[month] || day < 1) {
    console.log("ERROR");
    day = 1;
}

let fecha = new Date(year, month, day);
let diaSemana = fecha.getDay()

if (diaSemana == 0) {
    diaSemana = "Domingo";
} else if (diaSemana == 1) {
    diaSemana = "Lunes";
} else if (diaSemana == 2) {
    diaSemana = "Martes";
} else if (diaSemana == 3) {
    diaSemana = "Miercoles";
} else if (diaSemana == 4) {
    diaSemana = "Jueves";
} else if (diaSemana == 5) {
    diaSemana = "Viernes";
} else if (diaSemana == 6) {
    diaSemana = "Sabado";
}

console.log("El dia de tu nacimiento cae en el dia de la semana", diaSemana);