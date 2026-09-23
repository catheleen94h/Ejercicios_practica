/*

Conversor de temperatura

Convierte Celsius → Fahrenheit.
Fórmula: F = C * 9/5 + 32.

*/
const prompt = require('prompt-sync')();

let valor = Number(prompt("ingrese temperatura en celsius: "));

let resultado = (valor * (9/5)) + 32;

console.log(`${valor}°C son ${resultado}°F`);