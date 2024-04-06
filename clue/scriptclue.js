document.addEventListener("DOMContentLoaded", function() {
    var contenido = [
        "Dentro del juego vas a encontrar 5 localidades, 5 personajes y 5 armas tu debes de detectar la forma por la que se encuentra al asecino.",
        "Despues de haber pasado por eso debes de pasar al area donde vas a decidir si vas a ir al mapa o a ver a los personajes y ver sus historias.",
        "Teniendo ahora las reglas pasemos a la la historia todas las historias empiezan de la misma manera:",
        "Estas en tú casa donde de pronto te pones a leer un libro antiguo que alguien avento afuera de tu casa el cual llevaba por nombre el asecinato casi perfecto dentro del Bosque Encantado. ",
        

    ];

    var currentIndex = 0;
    var parrafo = document.getElementById("parrafo");

    setInterval(function() {
        currentIndex = (currentIndex + 1) % contenido.length;
        // Añade clase para desvanecer el texto
        parrafo.classList.add("fade-out");
        setTimeout(function() {
            // Cambia el contenido del párrafo
            parrafo.textContent = contenido[currentIndex];
            // Elimina la clase de desvanecimiento después de un breve retraso
            parrafo.classList.remove("fade-out");
        }, 1000); // Tiempo de espera para que se complete la transición
    }, 20000); // Cambiar el contenido cada 5 segundos
});

