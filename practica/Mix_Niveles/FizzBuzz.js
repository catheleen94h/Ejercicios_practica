/*
Para cada número:

Si es divisible entre 3, imprime "Fizz".
Si es divisible entre 5, imprime "Buzz".
Si es divisible entre 3 y 5, imprime "FizzBuzz".
Si no cumple ninguna de las anteriores, imprime el número.


*/

for(let i=1; i<100; i++){
    
    resultado = i % 3 == 0 && i % 5 == 0 ? "FizzBuzz"
              : i % 5 == 0 ? "Buzz"
              : i % 3 == 0 ? "Fizz"
              : i; 

    console.log(resultado);

}  

