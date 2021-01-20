'use strict';

//Selecting the elements and having a variable for each for easy access.
const score0El = document.querySelector('#score--0'); //Using # to select the element by ID.
const score1El = document.getElementById('score--1'); // Should not use # while using getElementById
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const activePane0 = document.querySelector('.player--0');
const activePane1 = document.querySelector('.player--1');
const player0 = document.getElementById('name--0');
const player1 = document.getElementById('name--1');

let random,
  current = 0,
  currentScore = 0,
  activePlayer = 0,
  gameState = true;
score1El.textContent = 0;
score0El.textContent = 0;
diceEl.classList.add('hidden');

//Function to reset the current score to Zero '0'
const resetCurrentScore = function () {
  current = 0;
  document.getElementById(`current--${activePlayer}`).textContent = current;
};

//Function to toggle the active panes
const toggleActivePlayerPane = function () {
  activePane0.classList.toggle('player--active');
  activePane1.classList.toggle('player--active');
};

//Function to Reset the Game
const resetGame = function () {
  console.log('Reset Initiated');
  activePane0.classList.add('player--active');
  activePane1.classList.remove('player--active');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document.getElementById(`name--${activePlayer}`).textContent = `Player ${
    activePlayer + 1
  }`;
  current = 0;
  random = 0;
  activePlayer = 0;
  gameState = true;
  diceEl.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
};

//Function to Check winner
const winnerCheck = function () {
  if (currentScore >= 10) {
    console.log(`Player ${activePlayer + 1} Won The Match!`);
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    //Mentioning which player won the match
    document.getElementById(`name--${activePlayer}`).textContent = `Player ${
      activePlayer + 1
    } Won!`;
    gameState = false;
    return true;
  }
};

const swithActivePlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
};

//Click on the RollButton
btnRoll.addEventListener('click', function () {
  //Game state check (Will be set to false once a player Wins)
  if (gameState) {
    //Getting the active player
    //Generating a random dice roll
    random = Math.trunc(Math.random() * 6 + 1);
    console.log(random);

    //Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${random}.png`;

    //If Dice was #1
    if (random !== 1) {
      current = Number(
        document.getElementById(`current--${activePlayer}`).textContent
      );

      current += random;
      document.getElementById(`current--${activePlayer}`).textContent = current;
    }

    //Add Dice number to current score
    else {
      resetCurrentScore();
      toggleActivePlayerPane();
      swithActivePlayer();
    }
  }
});

// Click on the Hold to save the current value
btnHold.addEventListener('click', function () {
  if (gameState) {
    toggleActivePlayerPane();
    currentScore = Number(
      document.querySelector(`#score--${activePlayer}`).textContent
    );
    currentScore += current;
    console.log(currentScore);
    document.querySelector(
      `#score--${activePlayer}`
    ).textContent = currentScore;
    if (!winnerCheck()) {
      resetCurrentScore();
      swithActivePlayer();
    }
  }
});

//Click on the NewGame Reset all values to Zero '0'
btnNew.addEventListener('click', resetGame);
