// Seleccionamos el botón por su id
const btnSeguir = document.getElementById('btnSeguir');

// Escuchamos el clic usando addEventListener
btnSeguir.addEventListener('click', () => {
    btnSeguir.textContent = "¡Siguiendo!";
    btnSeguir.style.backgroundColor = "#28a745"; // Cambia a verde
});


// Seleccionamos el botón por su id
const btnMensaje = document.getElementById('btnMensaje');

// Escuchamos el clic usando addEventListener
btnMensaje.addEventListener('click', () => {
   btnMensaje.textContent = "¡Enviado!";
    btnMensaje.style.backgroundColor = "#2898a7"; // Cambia a verde
});