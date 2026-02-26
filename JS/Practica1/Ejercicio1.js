const prompt = require('prompt-sync')();

let nombre = prompt("¿Cómo te llamas? ");
let apellido1 = prompt("¿Cuál es tu primer apellido? ");
let apellido2 = prompt("¿Cuál es tu segundo apellido? ");
let edad = prompt("¿Qué edad tienes? ");
let peso = prompt("¿Cuántos kilos pesas? ");
let num_dni = prompt("¿Cuál es tu número de dni (sin la letra)? ");
let letra_dni = prompt("¿Cuál es la letra de tu dni? ");
let dni = num_dni + letra_dni;

console.log("¡Hola", nombre, apellido1, apellido2, "de", edad, "años, veo que pesas",
    peso, "kilos y tu dni completo es", dni
);