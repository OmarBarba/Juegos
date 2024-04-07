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
    let userAnswers = []; 
    let characterValues = [];

    function askQuestion() {
      questionElement.textContent = questions[currentQuestionIndex];
    }

    function nextQuestion(answer) {
      userAnswers.push(answer);
      currentQuestionIndex++;
      if (currentQuestionIndex >= questions.length) {
        evaluateCharacter();
      } else {
        askQuestion();
      }
    }
    
    function evaluateCharacter() {
      
    const userResponses = userAnswers;
    console.log("Respuestas del usuario:", userResponses);
    

    characters.forEach(character => {
      let values = [
        character.es_estudiante,
        character.es_profesor,
        character.es_mago_oscuro,
        character.es_muggle,
        character.es_personaje_principal,
        character.es_personaje_secundario
      ];
      characterValues.push(values);
    });

    yesBtn.addEventListener('click', () => {
      nextQuestion('true');
    });

    noBtn.addEventListener('click', () => {
      nextQuestion('false');
    });

    askQuestion();
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));
