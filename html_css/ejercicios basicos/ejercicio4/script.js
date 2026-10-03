


const agregar = document.getElementById('agregar');
const tarea = document.getElementById('texto');

// 1. Seleccionamos el elemento <ul> de la lista en el HTML
const ul = document.querySelector('ul');

// Acción
agregar.addEventListener('click', () => {
    // Validar que el campo no esté vacío
    if (tarea.value.trim() !== "") {
        
        
        // 2. Crear un nuevo elemento de lista <li>
        const nuevoLi = document.createElement('li');
        
        // 3. Asignarle el texto que escribió el usuario
        nuevoLi.textContent = tarea.value;
        
        // 4. Agregar el <li> dentro del <ul>
        ul.appendChild(nuevoLi);
        
        // Limpiar el campo de texto
        tarea.value = "";
    }
});