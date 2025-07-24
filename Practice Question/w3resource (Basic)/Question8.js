// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

function gessNumber() {
  let randomNumber = Math.floor(Math.random() * 10) + 1; // Generate a random integer between 1 and 10
  let userGuess = parseInt(prompt("Guess a number between 1 and 10:")); // Prompt the user for a guess

  while (userGuess !== randomNumber) {
    console.log("Not matched. The correct number was: " + randomNumber); // Display the correct number
    userGuess = parseInt(prompt("Try again! Guess a number between 1 and 10:")); // Prompt the user for a guess again
  }
  console.log("Good Work! You guessed the correct number: " + randomNumber); // Display success message
}
gessNumber(); // Call the function to start the game
