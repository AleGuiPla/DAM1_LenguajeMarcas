const prompt = require('prompt-sync')();

let cadena = prompt("Intrduce tu nombre y apellidos: ");

let dirCorreo = cadena.toLowerCase().replace(/\s/g, ".");
dirCorreo += "@ies.luisbraille.com"