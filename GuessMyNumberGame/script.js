'use strict';

//Setting the secretNumber
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let win = false;
let highScore = 0;

//Setting the secretNumber
// document.querySelector('.number').textContent = secretNumber;

//Getting the value from the player
// document.querySelector('.guess').value;

//Value of High Score
// document.querySelector('.highscore').textContent = '20';

//Again button Click event listener (Setting all the changed values back to original)
document.querySelector('.again').addEventListener('click', function () {
  win = false;
  //HighScore check
  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
});
//Check button CLick event listener
document.querySelector('.check').addEventListener('click', function () {
  //Converting to Number since all the user input values are String
  const playerGuess = Number(document.querySelector('.guess').value);

  //Checking for the number match
  //To stop when the score is 0
  if (!win) {
    //Checks the player guess has an input
    if (!playerGuess) {
      //If the score is Not Zero
      if (score) {
        document.querySelector('.message').textContent = 'Enter a Number';
      }
      //If the player guess is equal to secret number ANd set the WIN flag to True
    } else if (playerGuess < 0 || playerGuess > 21) {
      document.querySelector('.message').textContent =
        'Enter a  Number between 1 to 20';
    } else if (secretNumber === playerGuess) {
      win = true;
      if (score) {
        document.querySelector('.message').textContent = 'Yu Got it!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
      }

      //IF the playerGuess is greater than secretNumber
    } else if (secretNumber < playerGuess) {
      // This block can be reftactored
      //And if score is a number
      if (score) {
        document.querySelector('.message').textContent = 'Big';
        score--;
        document.querySelector('.score').textContent = score;
      }
      //IF the score is zero
      else document.querySelector('.message').textContent = 'Retry!';
    }
    //IF the playerGuess is lesser than secretNumber
    else if (secretNumber > playerGuess) {
      // This block can be refractored
      //And if score is a number
      if (score) {
        document.querySelector('.message').textContent = 'Small';
        score--;
        document.querySelector('.score').textContent = score;
      }
      //IF the score is zero
      else document.querySelector('.message').textContent = 'Retry!';
    }
  }
});

//We can refractor (Eliminate the repeating code by creating function for the repeating elements or by condencing the repeating logic into one single block)
//eg:
//const displayMessage(message){
//   document.querySelector('.message').textContent = message;
// }

// displayMessage('The message you want to display'); //Function call
