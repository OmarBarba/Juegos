document.addEventListener("DOMContentLoaded", function() {
    var body = document.body;
    var images = ["/imagenes/intro.jpeg", "/imagenes/juego.jpeg"]; // Rutas de las imágenes
    var currentIndex = 0;
    
    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        body.style.backgroundImage = "url('" + images[currentIndex] + "')";
    }, 10000); // Cambia la imagen cada x milseg
});
document.getElementById("clue").addEventListener("click", function() {
    // Acciones a realizar cuando se hace clic en el botón Clue
    alert("¡Vamos a jugar Clue!");
});

document.getElementById("ad").addEventListener("click", function() {
    // Acciones a realizar cuando se hace clic en el botón Adivina quien
    alert("¡Vamos a jugar Adivina quien!");
});
// Seleccionar el botón Clue y agregar un event listener
document.getElementById("clue").addEventListener("click", function() {
    // Agregar la clase que cambia el color de fondo cuando se hace clic
    this.classList.add("clue-clic");

    // Eliminar la clase después de un tiempo (para simular el cambio de color temporal)
    setTimeout(() => {
        this.classList.remove("clue-clic");
    }, 500); // Cambiar a los milisegundos que desees para el tiempo que se mantiene el cambio de color
});

// Seleccionar el botón Adivina quien y agregar un event listener
document.getElementById("ad").addEventListener("click", function() {
    // Agregar la clase que cambia el color de fondo cuando se hace clic
    this.classList.add("ad-clic");

    // Eliminar la clase después de un tiempo (para simular el cambio de color temporal)
    setTimeout(() => {
        this.classList.remove("ad-clic");
    }, 500); // Cambiar a los milisegundos que desees para el tiempo que se mantiene el cambio de color
});
