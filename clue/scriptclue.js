document.addEventListener("DOMContentLoaded", function() {
    var contenido = [
        "Dentro del juego vas a encontrar 5 localidades, 5 personajes y 5 armas tu debes de detectar la forma por la que se encuentra al asecino.",
        "Despues de haber pasado por eso debes de pasar al area donde vas a decidir si vas a ir al mapa o a ver a los personajes y ver sus historias.",
        "Teniendo ahora las reglas pasemos a la la historia todas las historias empiezan de la misma manera:"

    ];

    function cambiarParrafo() {
        // Añade clase para desvanecer el texto
        parrafo.classList.add("fade-out");
        setTimeout(function() {
            // Cambia el contenido del párrafo
            parrafo.textContent = contenido[currentIndex];
            // Elimina la clase de desvanecimiento después de un breve retraso
            parrafo.classList.remove("fade-out");
            // Incrementa el índice para el siguiente párrafo
            currentIndex = (currentIndex + 1) % contenido.length;
            // Detiene el cambio automático después de mostrar todos los párrafos una vez
            if (currentIndex === 0) {
                clearInterval(intervalID);
            }
        },500);
    }    
    var intervalID = setInterval(cambiarParrafo, 6000);

    botonSeleccion.addEventListener("click", function() {
        if (cambioCompletado) {
            window.location.href = "seleccion.html";
        }
    });
});

