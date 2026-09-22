/* 
Crea una función elementosRepetidos(numeros) que reciba un array y devuelva solamente los elementos que aparecen más de una vez, sin repetirlos en el resultado.

Ejemplo:

elementosRepetidos([1, 2, 3, 2, 4, 1, 5]);
// [1, 2]

Otro:

elementosRepetidos(["rojo", "azul", "verde", "rojo", "azul"]);
// ["rojo", "azul"]

Restricciones:

Usa for.
No uses Set.
No uses filter().
No uses sort().

*/

const prompt = require('prompt-sync')();

let numeroElementos = +prompt("Ingrese tamaño del array: ");
let array = [];

for (let i = 0; i < numeroElementos; i++) {
    let dato = prompt(`Ingrese dato ${i + 1}: `);
    array.push(dato);
}

// Función elementos repetidos corregida
const elementosRepetidos = (variables) => {
    let resultado = [];

    for (let i = 0; i < variables.length; i++) {
        let elementoActual = variables[i];
        let contador = 0;

        // 1. Contamos cuántas veces aparece el elemento en el array
        for (let j = 0; j < variables.length; j++) {
            if (variables[j] === elementoActual) {
                contador++;
            }
        }

        // 2. Comprobamos si ya está guardado en nuestro resultado
        let yaExisteEnResultado = false;
        for (let k = 0; k < resultado.length; k++) {
            if (resultado[k] === elementoActual) {
                yaExisteEnResultado = true;
                break;
            }
        }

        // 3. Si aparece más de una vez y aún no lo agregamos, lo guardamos
        if (contador > 1 && !yaExisteEnResultado) {
            resultado.push(elementoActual);
        }
    }

    return resultado;
};

console.log("Elementos repetidos:", elementosRepetidos(array));