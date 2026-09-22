/* 
Crea una función contarVocales(texto) que cuente cuántas vocales (a, e, i, o, u) tiene una cadena.

Ejemplo:

contarVocales("JavaScript");
// 3

Intenta que funcione tanto con mayúsculas como con minúsculas.

*/

// npm install prompt-sync
const prompt = require('prompt-sync')();


let palabra = prompt("ingrese su palabra: ");
let minuscula = palabra.toLowerCase();
let conteo=0;

for(let i=0 ; i<minuscula.length ; i++ ){
    let letra = minuscula[i];
    
    if ("aeiou".includes(letra)){
        conteo++;}


}

console.log(conteo);