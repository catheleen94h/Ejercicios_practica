/*
Crea una función contarPares(inicio, fin) que reciba dos números y devuelva cuántos números pares hay entre ellos, incluidos los extremos.

Ejemplo:

contarPares(1, 10);
resultado: 5 pares
 

*/


// npm install prompt-sync
const prompt = require('prompt-sync')();

let numero1 = Number(prompt("Ingrese primer numero: "));
let numero2 = +prompt("ingrese ultimo numero: ");


function contarPares(num1,num2) {
 let conteo=0;     

  for(let i=num1; i<num2+1; i++){
   par=i%2;
    if(par==0){conteo++;}
      }

    return conteo;
}

let resultado = contarPares(numero1,numero2);

console.log(resultado)