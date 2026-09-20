/* 
Crea una función que reciba un array de números y devuelva el número más grande sin utilizar Math.max().

numeroMayor([4, 8, 2, 15, 6]);
// 15

Extra: haz que también funcione si todos los números son negativos. 

*/

const prompt = require('prompt-sync')();
let a = [4, 30, 2, 15, 6];


function NumeroMayor(numeros){
let mayor  = numeros[0];

for(let i = 1 ; i<numeros.length  ; i++){
    if(numeros[i]>mayor){ mayor = numeros[i];}

}

console.log(mayor); 
}

NumeroMayor(a);

