/* Calculadora de edad

Pide el año de nacimiento.
Calcula aproximadamente la edad actual.*/

const prompt = require('prompt-sync')();
const aoActual = new Date().getFullYear();

let Nacimiento = Number(prompt("ingrese su año de nacimiento: "));

let edadAproximada = aoActual - Nacimiento;

console.log("Usted tiene aproximadamente: " + edadAproximada + " años");