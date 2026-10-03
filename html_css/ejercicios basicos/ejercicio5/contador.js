
let contador =0;

const incremento = document.getElementById('incremento');
const decre = document.getElementById('decremento');
const reiniciar = document.getElementById('reiniciar');

incremento.addEventListener('click',()=>{
    contador++;
    document.getElementById('num').innerHTML = contador;
})

decre.addEventListener('click',()=>{
    contador -=1;
    document.getElementById('num').innerHTML = contador;

})

reiniciar.addEventListener('click',()=>{
    contador = 0;
    document.getElementById('num').innerHTML = contador;

})