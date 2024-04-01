document.addEventListener("DOMContentLoaded", function() {
    var body = document.body;
    var images = ["/imagenes/intro.jpeg", "/imagenes/juego.jpeg"]; // Rutas de las imágenes
    var currentIndex = 0;
    
    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        body.style.backgroundImage = "url('" + images[currentIndex] + "')";
    }, 10000); // Cambia la imagen cada x milseg
});
