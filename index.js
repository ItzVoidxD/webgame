// const guessInput = document.getElementById('guess-input');
// const guessButton = document.getElementById('guess-button');
// const result = document.getElementById('result');
// let targetNumber = Math.floor(Math.random() * 100) + 1;

// guessButton.addEventListener('click', function() {
//   const guess = parseInt(guessInput.value, 10);
//   if (guess === targetNumber) {
//     result.innerHTML = 'You win!';
//   } else if (guess < targetNumber) {
//     result.innerHTML = 'Too low';
//   } else {
//     result.innerHTML = 'Too high';
//   }
// });


// Getting elements from DOM
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const result = document.getElementById('result');

// Picks a random number between 1 and 100
let targetNumber = Math.floor(Math.random() * 100);

// Event Listeners
guessButton.addEventListener('click', () => {
  const guess = parseInt(guessInput.value);
  if (guess === targetNumber) {
    result.innerText = 'You win!';
  } else if (guess < targetNumber) {
    result.innerText = 'Too low';
  } else {
    result.innerText = 'Too high';
  }
});

guessInput.addEventListener("keypress", (event) => {
  if(event.key === "Enter"){
    event.preventDefault()
    guessButton.click()
  }
})
