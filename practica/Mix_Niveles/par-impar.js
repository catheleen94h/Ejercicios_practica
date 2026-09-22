

const prompt = require('prompt-sync')();

let numero = +prompt("ingrese un numero: ")

let dato = numero%2 === 0 ? "es par" 
         : numero%2 === 1 ?" es impar"
         : " El dato ingresado no es valido";

console.log(dato);

