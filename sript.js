
    // Obtén elementos del DOM
    const mostrarFormularioBtn = document.getElementById("mostrarFormulario");
    const ventanaEmergente = document.getElementById("ventanaEmergente");
    const cerrarFormularioBtn = document.getElementById("cerrarFormulario");
    
    // Mostrar la ventana emergente al hacer clic en el botón
    mostrarFormularioBtn.addEventListener("click", function () {
        ventanaEmergente.style.display = "block";
    });
    
    // Ocultar la ventana emergente al hacer clic en el botón de cierre (X)
    cerrarFormularioBtn.addEventListener("click", function () {
        ventanaEmergente.style.display = "none";
    });
    
    // Ocultar la ventana emergente si se hace clic fuera de ella
    window.addEventListener("click", function (event) {
        if (event.target === ventanaEmergente) {
            ventanaEmergente.style.display = "none";
        }
    });
    
    // Prevenir que el evento de hacer clic en la ventana emergente llegue al elemento debajo de ella
    ventanaEmergente.addEventListener("click", function (event) {
        event.stopPropagation();
    });
    
    
     // Lista de imágenes
    const imagenes = [
        "C:/Users/krist/OneDrive/Documentos/web_1/assests/fotos/carrusel/A ANIMAL PRINT DUO.jpg",
        "C:/Users/krist/OneDrive/Documentos/web_1/assests/fotos/carrusel/ANIMALITOS SET.jpg",
        "C:/Users/krist/OneDrive/Documentos/web_1/assests/fotos/carrusel/CUADRITOS DUO.jpg",
        "C:/Users/krist/OneDrive/Documentos/web_1/assests/fotos/carrusel/F FLORES AMARILLAS DUO.jpg",
        "C:/Users/krist/OneDrive/Documentos/web_1/assests/fotos/carrusel/IMG_20230817_115013236.jpg",
        "C:/Users/krist/OneDrive/Documentos/web_1/assests/fotos/carrusel/IMG_20230817_115254969.jpg",
        "C:/Users/krist/OneDrive/Documentos/web_1/assests/fotos/carrusel/MANDALA SET.jpg",
        "C:/Users/krist/OneDrive/Documentos/web_1/assests/fotos/carrusel/ROJO SET.jpg"
    ];
    
    // Índice de la imagen actual
    let indiceActual = 0;
    
    // Obtén el elemento de la imagen
    const imagen = document.getElementById("imagen");
    
    // Obtén los botones
    const anteriorBtn = document.getElementById("anterior");
    const siguienteBtn = document.getElementById("siguiente");
    
    // Evento para mostrar la imagen actual
    function mostrarImagen() {
        imagen.src = imagenes[indiceActual];
    }
    
    // Evento para el botón "Anterior"
    anteriorBtn.addEventListener("click", function () {
        indiceActual--;
        if (indiceActual < 0) {
            indiceActual = imagenes.length - 1;
        }
        mostrarImagen();
    });
    
    // Evento para el botón "Siguiente"
    siguienteBtn.addEventListener("click", function () {
        indiceActual++;
        if (indiceActual >= imagenes.length) {
            indiceActual = 0;
        }
        mostrarImagen();
    });
    
    // Mostrar la primera imagen al cargar la página
    mostrarImagen();
    
    
    const formulario = document.getElementById("formularioContacto");
            const resultado = document.getElementById("resultado");
            const nombreEnviado = document.getElementById("nombreEnviado");
            const emailEnviado = document.getElementById("emailEnviado");
            const telefonoEnviado = document.getElementById("telefonoEnviado");
            const mensajeEnviado = document.getElementById("mensajeEnviado");
    
    formulario.addEventListener("submit", function (event) {
            event.preventDefault();
            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const telefono = document.getElementById("telefono").value;
            const mensaje = document.getElementById("mensaje").value;
    
        if (validarFormulario(nombre, email, telefono, mensaje)) {
            resultado.style.display = "block";
            nombreEnviado.textContent = nombre;
            emailEnviado.textContent = email;
            telefonoEnviado.textContent = telefono;
            mensajeEnviado.textContent = mensaje;
            }
        });
    
    function validarFormulario(nombre, email, telefono, mensaje) {
        let errores = [];
    
        if (!nombre) {
            errores.push("El campo Nombre es obligatorio.");
        }
    
        if (!email) {
            errores.push("El campo Email es obligatorio.");
        } else if (!validarEmail(email)) {
            errores.push("El formato del Email es incorrecto.");
        }
    
        if (!telefono) {
            errores.push("El campo Teléfono es obligatorio.");
        }
    
        if (!mensaje) {
            errores.push("El campo Mensaje es obligatorio.");
        }
    
        if (errores.length > 0) {
            mostrarErrores(errores);
            return false;
        }
    
        return true;
    }
    
    function validarEmail(email) {
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regexEmail.test(email);
    }
    
    function mostrarErrores(errores) {
            const erroresDiv = document.createElement("div");
            erroresDiv.className = "error";
            erroresDiv.innerHTML = "<h2>Errores:</h2><ul>";
            errores.forEach(function (error) {
            erroresDiv.innerHTML += `<li>${error}</li>`;
        });
        erroresDiv.innerHTML += "</ul>";
        resultado.innerHTML = "";
        resultado.appendChild(erroresDiv);
        resultado.style.display = "block";
    }
    
    