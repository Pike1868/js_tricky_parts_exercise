/**Guessing Game
 *
 * Write a function called guessingGame,
 * which returns a function that allows
 * you to guess a random whole number between
 * 0 and 99. Every time you create a new game,
 * it should select a new random number,
 * and keep it secret from the player.
 *
 * Once the game has started, you can guess the number.
 * The game should tell you whether your guess is
 * too high or too low, or correct.
 *
 * After a correct guess the game ends.
 */
function guessingGame() {
  //Generate a random number between 0 and 99 and save it to a variable
  const randomNum = Math.floor(Math.random() * 100);

  //Save number of guesses to a variable
  let numberOfGuesses = 0;
  
  //Use a variable to determine if the game is over
  let gameOver = false;

  //Return a function that allows a player to guess the "randomNum"
  return function guess(number) {
    //Check if the game is already over
    if (gameOver) return "The game is over, you already won!";
    //add one to the numberOfGuess for every guess
    if (number === randomNum) {
      //If the guess is correct, change variable tracking game over status to true,
      numberOfGuesses++;
      gameOver = true;
      return `You win! You found ${randomNum} in ${numberOfGuesses} guesses.`;
    } else if (number < randomNum) {
      numberOfGuesses++;
      return `${number} is too low!`;
    } else {
      numberOfGuesses++;
      return `${number} is too high!`;
    }
  };
}

module.exports = { guessingGame };
