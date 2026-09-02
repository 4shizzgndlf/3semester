const MIN = 1;
const MAX = 100;
let secretNumber;
let attempts;

// DOM elements to be used:
// const guessForm = document.querySelector("#guessForm");
// const guessInput = document.querySelector("#guessInput");
// const feedback = document.querySelector("#feedback");
// const attemptsDisplay = document.querySelector("#attempts");
// const restartBtn = document.querySelector("#restartBtn");

// TODO
function initGame() {
  // TODO 6: Call the `resetGame` function to initialize the game state when the page loads.
  // TODO 14: Add event listener to the guess form
  // TODO 15: Add event listener to the restart button
  resetGame();

  const guessForm = document.querySelector("#guessForm");
  const restartBtn = document.querySelector("#restartBtn");

  guessForm.addEventListener("submit", handleGuess);

  restartBtn.addEventListener("click", resetGame);

}

// TODO
function resetGame() {
  // TODO 1: Generate a random number between MIN and MAX, and store it in the `secretNumber` variable.
  // Hint: Use `Math.random()` and `Math.floor()` to generate the random number.

  // TODO 2: Reset the attempts counter to 0.

  // TODO 3: Update the attemptsDisplay in the DOM to show the reset attempts count.

  // TODO 4: Clear any feedback messages in the DOM.

  // TODO 5: Add the "hidden" class to the restart button to hide it.
  const attemptsDisplay = document.querySelector("#attempts");
  const feedbackDisplay = document.querySelector("#feedback");
  const restartBtn = document.querySelector("#restartBtn");

  secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  console.log(secretNumber);

  attempts = 0;
  attemptsDisplay.textContent = attempts;

  feedbackDisplay.textContent = "";

  restartBtn.classList.add("hidden");
}

function handleGuess(event) {
  // TODO 7: Prevent the default form submission behavior to avoid page reloads.
  // TODO 8: Get the user's guess from the input field and convert it to a number (use `parseInt` ex. parseInt("2")).
  // TODO 9: Create a boolean variable `isBetweenRange` that checks if the guess is a valid number and within the defined range (between MIN and MAX).
  // TODO 10: Create a boolean variable `isValidNumber` that checks if the guess is a valid number (not NaN use isNan function).
  // TODO 11: If the guess is a valid number and within the range, increment the attempts counter and update the attempts display in the DOM.
  // TODO 12: Provide feedback to the user:
  // - If the guess is correct, display a congratulatory message in the feedback element, and show the restart button (remove hidden class from restartBtn).
  // - If the guess is too low, display a message indicating that the guess is too low.
  // - If the guess is too high, display a message indicating that the guess is too high.
  // TODO 13: Clear the form input field (use event.target.reset() to clear the form after submission).
  event.preventDefault();

  const guessInput = document.querySelector("#guessInput");
  const guess = parseInt(guessInput.value);
  const attemptsDisplay = document.querySelector("#attempts") 
  const feedbackDisplay = document.querySelector("#feedback")

  let isBetweenRange = guess >= MIN && guess <= MAX;
  let isValidNumber = !isNaN(guess);

  if (isBetweenRange && isValidNumber) {
    attempts++;
    attemptsDisplay.textContent = attempts;
  }

  if (guess === secretNumber) {
      feedbackDisplay.textContent =
        "Congratulations! You guessed the number!";
      restartBtn.classList.remove("hidden");
    } else if (guess < secretNumber) {
      feedbackDisplay.textContent = "Too low! Try again.";
    } else if (guess > secretNumber) {
      feedbackDisplay.textContent = "Too high! Try again.";
    }

    event.target.reset();
}
initGame();
