// Función para adivinar el personaje
function adivinarPersonaje() {
    personajesPosibles = personajes.slice();
    pregunta = generarPregunta(personajesPosibles);
    document.getElementById('pregunta').textContent = pregunta;
  }
  
  // Función para manejar las respuestas del usuario
  function manejarRespuesta(respuesta) {
    if (respuesta) {
      personajesPosibles = personajesPosibles.filter(personaje => evaluarPregunta(personaje, pregunta));
    } else {
      personajesPosibles = personajesPosibles.filter(personaje => !evaluarPregunta(personaje, pregunta));
    }
  
    if (personajesPosibles.length === 1) {
      document.getElementById('resultado').textContent = `El personaje que estabas pensando es: ${personajesPosibles[0].nombre}`;
      document.getElementById('si').disabled = true;
      document.getElementById('no').disabled = true;
    } else {
      pregunta = generarPregunta(personajesPosibles);
      document.getElementById('pregunta').textContent = pregunta;
    }
  }
  
  // Agregar event listeners a los botones
  document.getElementById('si').addEventListener('click', () => manejarRespuesta(true));
  document.getElementById('no').addEventListener('click', () => manejarRespuesta(false));
  
  // Iniciar el juego
  let personajesPosibles;
  let pregunta;
  adivinarPersonaje();