
const agregar = document.getElementById('agregar');
const tarea = document.getElementById('texto');
const ul = document.querySelector('ul');

// Acción al hacer clic en "Agregar"
agregar.addEventListener('click', () => {
    
    // Validar que el campo no esté vacío
    if (tarea.value.trim() !== "") {
        
        // 1. Crear el <li>
        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = tarea.value + " "; // Espacio para que el botón no quede pegado al texto
        
        // 2. Crear el botón de eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = "Eliminar";
        
        // 3. Darle la acción de borrar al botón de eliminar
        btnEliminar.addEventListener('click', () => {
            nuevoLi.remove(); // Elimina este <li> específico
        });
        
        // 4. Meter el botón dentro del <li>
        nuevoLi.appendChild(btnEliminar);
        
        // 5. Agregar el <li> completo dentro de la lista <ul>
        ul.appendChild(nuevoLi);
        
        // 6. Limpiar el campo de texto
        tarea.value = "";
    }
});