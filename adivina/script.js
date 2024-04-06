// script.js
const charactersData = [];
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const resultElement = document.getElementById('result');

fetch('characters.json')
  .then(response => response.json())
  .then(data => {
    charactersData.push(...data);
    startGame();
  })
  .catch(error => console.error('Error al cargar los datos:', error));

let remainingCharacters;

function startGame() {
  remainingCharacters = [...charactersData];
  askQuestion();
}

function askQuestion() {
  const question = getNextQuestion();
  questionElement.textContent = question;
  choicesElement.innerHTML = '';

  const yesButton = document.createElement('button');
  yesButton.textContent = 'Sí';
  yesButton.addEventListener('click', () => handleAnswer(true, question));
  choicesElement.appendChild(yesButton);

  const noButton = document.createElement('button');
  noButton.textContent = 'No';
  noButton.addEventListener('click', () => handleAnswer(false, question));
  choicesElement.appendChild(noButton);
}

function getNextQuestion() {
  const firstCharacter = remainingCharacters[0];
  const hints = firstCharacter.hints.filter(hint => !hint.startsWith('Es un'));
  return hints.length > 0 ? hints[0] : 'Es un hombre';
}

function handleAnswer(answer, question) {
  remainingCharacters = remainingCharacters.filter(character => {
    const isMatch = character.hints.some(hint => hint === question);
    return answer ? isMatch : !isMatch;
  });

  if (remainingCharacters.length === 1) {
    const answer = remainingCharacters[0].name;
    resultElement.textContent = `¡Adiviné! Estabas pensando en ${answer}`;
    setTimeout(startGame, 2000);
  } else {
    askQuestion();
  }
}