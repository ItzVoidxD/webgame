const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const result = document.getElementById('result');
let targetNumber = Math.floor(Math.random() * 100) + 1;

guessButton.addEventListener('click', function() {
  const guess = parseInt(guessInput.value, 10);
  if (guess === targetNumber) {
    result.innerHTML = 'You win!';
  } else if (guess < targetNumber) {
    result.innerHTML = 'Too low';
  } else {
    result.innerHTML = 'Too high';
  }
});
