document.addEventListener("DOMContentLoaded", function() {
    var contenido = [
        { imagen: "imagen1.jpg", texto: "Texto de la imagen 1." },
        { imagen: "imagen2.jpg", texto: "Texto de la imagen 2." },
        { imagen: "imagen3.jpg", texto: "Texto de la imagen 3." }
    ];

    var currentIndex = 0;
    var imagenElement = document.getElementById("imagen");
    var parrafoElement = document.getElementById("parrafo");

    function cambiarContenido() {
        // Obtener el objeto de contenido actual
        var contenidoActual = contenido[currentIndex];

        // Asignar la imagen y el texto al HTML
        imagenElement.src = contenidoActual.imagen;
        parrafoElement.textContent = contenidoActual.texto;

        // Incrementar el índice o volver al inicio si es necesario
        currentIndex = (currentIndex + 1) % contenido.length;
    }

    // Cambiar el contenido cada 5 segundos (5000 milisegundos)
    setInterval(cambiarContenido, 5000);
});