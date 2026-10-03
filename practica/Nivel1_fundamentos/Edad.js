/* Calculadora de edad

Pide el año de nacimiento.
Calcula aproximadamente la edad actual.*/


const aoActual = new Date().getFullYear();
const prompt = require('prompt-sync')();


let Nacimiento = Number(prompt("ingrese su año de nacimiento: "));

let edadAproximada = aoActual - Nacimiento;

console.log("Usted tiene aproximadamente: " + edadAproximada + " años");