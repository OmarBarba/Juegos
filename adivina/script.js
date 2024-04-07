document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia a los elementos HTML
    const preguntaElement = document.getElementById('pregunta');
    const siButton = document.getElementById('si');
    const noButton = document.getElementById('no');
    const nuloButton = document.getElementById('nulo');
    const resultadoElement = document.getElementById('resultado');
  
    let preguntas;
    let preguntaActualIndex = 0;
  
    // Cargar preguntas desde el archivo JSON
    function cargarPreguntas() {
      fetch('preguntas.json') // Asegúrate de que la ruta sea correcta
        .then(response => {
          if (!response.ok) {
            throw new Error('No se pudo cargar el archivo JSON');
          }
          return response.json();
        })
        .then(data => {
          preguntas = data; // Guardar preguntas
          mostrarPregunta(); // Mostrar primera pregunta al cargar la página
        })
        .catch(error => {
          console.error('Error de carga:', error);
        });
    }
  
    // Función para mostrar la pregunta actual
    function mostrarPregunta() {
      if (preguntaActualIndex < preguntas.length) {
        preguntaElement.textContent = preguntas[preguntaActualIndex].pregunta;
      } else {
        // Si no hay más preguntas, mostrar resultado final
        resultadoElement.textContent = '¡No pude adivinar el personaje!';
      }
    }
  
    // Avanzar a la siguiente pregunta
    function siguientePregunta() {
      preguntaActualIndex++;
      mostrarPregunta();
    }
  
    // Evento click para el botón "Sí"
    siButton.addEventListener('click', function() {
      // Avanzar a la siguiente pregunta
      siguientePregunta();
    });
  
    // Evento click para el botón "No"
    noButton.addEventListener('click', function() {
      // Avanzar a la siguiente pregunta
      siguientePregunta();
    });
  
    // Evento click para el botón "Nulo"
    nuloButton.addEventListener('click', function() {
      // Avanzar a la siguiente pregunta
      siguientePregunta();
    });
  
    // Llamar a la función para cargar las preguntas al cargar la página
    cargarPreguntas();
  });
  