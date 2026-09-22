/* 
Crea una función numeroMenor(numeros) que reciba un array y devuelva el número más pequeño.

Ejemplo:

numeroMenor([8, 3, 15, 2, 9]);
// 2

Otro:

numeroMenor([-5, -20, -3, -10]);
// -20

Restricciones:

Usa un for.
No uses Math.min().
No uses sort().

*/

// recepcion de datos
//npm install prompt-sync
const prompt = require('prompt-sync')();

let num = +prompt("ingrese cantidad de numeros: ");
let array = [];


for(let i=0 ; i<num ; i++){
let valorIngresado = +prompt(`ingrese numero ${i+1}: `);
 array.push(valorIngresado);  
}

//funcion para determinar numero menor

// function numeroMenor(numeros){}
 const numeroMenor = (numeros) => {
   let resultado = numeros[0];

    for(let i = 1; i < numeros.length ; i++){

    //if(numeros[i]<resultado){ resultado=numeros[i];}
    resultado = numeros[i]<resultado ? numeros[i] : resultado;

    }

    return resultado;
 }

let valor = numeroMenor(array);
console.log("Datos ingresados: " + array);
console.log("el numero menor es: " + valor);