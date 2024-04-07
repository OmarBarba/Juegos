// Cargar el archivo JSON
fetch('personajes.json')
  .then(response => response.json())
  .then(data => {
    // Una vez que el archivo JSON está cargado, trabajamos con los datos
    const characters = data;
    let currentQuestionIndex = 0;

    const questions = [
      "¿Es un estudiante de Hogwarts?",
      "¿Es un profesor en Hogwarts?",
      "¿Es un mago oscuro?",
      "¿Es un muggle?",
      "¿Es un personaje principal?",
      "¿Es un personaje secundario?"
    ];

    const questionElement = document.getElementById('question');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    function askQuestion() {
      questionElement.textContent = questions[currentQuestionIndex];
    }

    function nextQuestion(answer) {
      currentQuestionIndex++;
      if (currentQuestionIndex >= questions.length) {
        if (answer === 'yes') {
          questionElement.textContent = "¡He adivinado! ¿Quieres jugar de nuevo?";
        } else {
          questionElement.textContent = "¡Vaya! No pude adivinar el personaje. ¿Quieres intentarlo de nuevo?";
        }
        currentQuestionIndex = 0;
      } else {
        askQuestion();
      }
    }

    yesBtn.addEventListener('click', () => {
      nextQuestion('yes');
    });

    noBtn.addEventListener('click', () => {
      nextQuestion('no');
    });

    askQuestion();
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));
