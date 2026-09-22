/* 
Crea una función que reciba un array y devuelva otro array sin elementos repetidos.

eliminarDuplicados([1, 2, 2, 3, 4, 4, 5]);
// [1, 2, 3, 4, 5]

Restricción: primero intenta hacerlo sin Set. 

*/

const prompt = require('prompt-sync')();
let dato = [];
let dato2= [];

for(let i=0; i<5; i++){
   let valor = +prompt("ingrese un número: "); 
    dato.push(valor);
}


function eliminarDuplicados(numero){
 for(let elemento of numero){
    if(!dato2.includes(elemento)){
        dato2.push(elemento);
    }}
return dato2;

}

eliminarDuplicados(dato);
console.log(`original: ${dato} \n Sin repeticiones: ${dato2} `)