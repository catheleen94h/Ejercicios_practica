let contador=0;

const incre = document.getElementById('incremento');
const decre = document.getElementById('decremento');



incre.addEventListener('click',() =>{
     contador++;
    document.getElementById('conteo').innerHTML = contador;
    console.log(contador);
    
})

decre.addEventListener('click',() =>{
    contador--;
    document.getElementById('conteo').innerHTML = contador;
    console.log(contador);
    
})