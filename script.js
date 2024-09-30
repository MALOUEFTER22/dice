// Keeping track of scores like a boss
let playerScore = 0;
let aiScore = 0;
let draws = 0;

// Grab all the elements we need, let's do this!
let resultText = document.getElementById('result');
let playerRollText = document.getElementById('playerRollText');
let aiRollText = document.getElementById('aiRollText');
let playerScoreText = document.getElementById('playerScoreText');
let aiScoreText = document.getElementById('aiScoreText');
let drawText = document.getElementById('drawText');

// Roll the dice, baby!
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;  // Dice gives us 1-6
}

// When the button gets clicked, it's game time!
document.getElementById('rollButton').addEventListener('click', function() {
  // Roll the dice for player and AI
  let playerRoll = rollDice();
  let aiRoll = rollDice();

  // Show what we rolled
  playerRollText.innerText = 'Player rolled: ' + playerRoll;
  aiRollText.innerText = 'AI rolled: ' + aiRoll;

  // Who's winning? Let’s find out!
  if (playerRoll > aiRoll) {
    playerScore++;
    resultText.innerText = 'You win this round! 🎉';
  } else if (aiRoll > playerRoll) {
    aiScore++;
    resultText.innerText = 'AI takes this one. 😢';
  } else {
    draws++;
    resultText.innerText = "It's a tie! 😎";
  }

  // Update the scoreboard so we know who’s the champ
  playerScoreText.innerText = 'Player Score: ' + playerScore;
  aiScoreText.innerText = 'AI Score: ' + aiScore;
  drawText.innerText = 'Draws: ' + draws;
});

