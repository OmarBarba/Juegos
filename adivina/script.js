// Cargar los datos de los personajes desde el archivo JSON
const charactersData = []; // Aquí se almacenarán los datos de los personajes

fetch('characters.json')
  .then(response => response.json())
  .then(data => {
    charactersData.push(...data);
    startGame();
  })
  .catch(error => console.error('Error al cargar los datos:', error));

let currentCharacter;
const characterImageElement = document.getElementById('character-image');
const hintsElement = document.getElementById('hints');
const guessInput = document.getElementById('guess');
const checkAnswerButton = document.getElementById('check-answer');
const resultElement = document.getElementById('result');

function startGame() {
  currentCharacter = charactersData[Math.floor(Math.random() * charactersData.length)];
  characterImageElement.style.backgroundImage = `url(${currentCharacter.image})`;
  hintsElement.innerHTML = '';
  guessInput.value = '';
  resultElement.innerHTML = '';
  showNextHint();
}

function showNextHint() {
  if (currentCharacter.hints.length > 0) {
    const hint = currentCharacter.hints.shift();
    const hintElement = document.createElement('p');
    hintElement.textContent = hint;
    hintsElement.appendChild(hintElement);
  } else {
    hintsElement.innerHTML = '<p>No hay más pistas disponibles</p>';
  }
}

checkAnswerButton.addEventListener('click', () => {
  const guess = guessInput.value.trim().toLowerCase();
  const answer = currentCharacter.name.toLowerCase();

  if (guess === answer) {
    resultElement.innerHTML = '¡Correcto! 🎉';
    setTimeout(startGame, 2000);
  } else {
    resultElement.innerHTML = 'Incorrecto 😞';
    showNextHint();
  }
});