let targetNumber = 0;
let attemptCount = 0;
const maxAttempts = 5;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const restartButton = document.getElementById("restartButton");
const attemptText = document.getElementById("attempt");
const resultText = document.getElementById("result");


// Initial screen
guessInput.value = "";
guessButton.style.display = "none";
restartButton.style.display = "block";
attemptText.textContent = "Attempt 0/5";
resultText.textContent = "";


// Restart button
restartButton.addEventListener("click", function () {

    startGame();

});


// Guess button
guessButton.addEventListener("click", function () {

    // If button says Restart, restart the game
    if (guessButton.textContent === "Restart") {

        startGame();
        return;

    }

    let inputValue = guessInput.value;

    // Do nothing if empty or not a number
    if (inputValue === "" || isNaN(inputValue)) {
        return;
    }

    let guess = Number(inputValue);

    attemptCount++;

    attemptText.textContent = "Attempt " + attemptCount + "/5";


    // Correct answer
    if (guess === targetNumber) {

        resultText.textContent = "You WIN";

        guessButton.textContent = "Restart";

        return;
    }


    // Too high
    if (guess > targetNumber) {

        resultText.textContent = guess + " is too high";

    }


    // Too low
    else if (guess < targetNumber) {

        resultText.textContent = guess + " is too low";

    }


    // Used all attempts
    if (attemptCount === maxAttempts) {

        resultText.textContent = "You LOSE";

        guessButton.textContent = "Restart";

        return;
    }


    // Clear input and focus again
    guessInput.value = "";
    guessInput.focus();

});


// Start a new game
function startGame() {

    // Random number between 1 and 20
    targetNumber = Math.floor(Math.random() * 20) + 1;

    attemptCount = 0;

    guessInput.value = "";

    attemptText.textContent = "Attempt 0/5";

    resultText.textContent = "";

    restartButton.style.display = "none";

    guessButton.style.display = "inline-block";

    guessButton.textContent = "Guess!";

    guessInput.focus();
}