/*

Calculadora

Pide dos números.
Muestra suma, resta, multiplicación y división.

*/
const prompt = require('prompt-sync')();

let resultado;
let operacion = +prompt(
`Operacion a realizar: 1.Sum | 2.Res | 3.Mul | 4.Div: `);

if ([1, 2, 3, 4].includes(operacion) ){
 
let num1 = Number(prompt("ingrese número 1: "));
let num2 = Number(prompt("ingrese número 2: "));

resultado = operacion == 1? num1 + num2
          : operacion == 2? num1 - num2
          : operacion == 3? num1 * num2
          : operacion == 4 && num2!=0 ? num1 / num2 : "No se puede dividir por cero"    

} else {resultado = "ingrese una opcion válida"}           

 console.log("El resultado de la operacion es: " + resultado);