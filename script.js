// VARIABLES
let result = document.getElementById('result');
let button0 = document.getElementById("rollButton"); // Updated to match the button ID
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");
let scoreboardDraw = document.getElementById("drawText");
let scoreboardPlayer = document.getElementById("playerScoreText");
let scoreboardAi = document.getElementById("aiScoreText");

// Data
let playerRoll = 0;
let aiRoll = 0;
let playerScore = 0;
let ties = 0;
let aiScore = 0;

// PROCESSES
loadGame();
updateScoreboard();

button0.addEventListener("click", function () {
  getRandomNumberOneToSixForPlayer();
  getRandomNumberOneToSixForAi();
  showPlayerRollResult();
  showAiRollResult();
  evaluate();
  updateScoreboard();
  saveGame();
});

// CONTROLLERS
function getRandomNumberOneToSixForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}

function getRandomNumberOneToSixForAi() {
  aiRoll = Math.floor(Math.random() * 6) + 1;
}

function evaluate() {
  if (playerRoll > aiRoll) {
    playerScore++;
    result.innerText = "Result: Player wins!";
  } else if (playerRoll < aiRoll) {
    aiScore++;
    result.innerText = "Result: AI wins!";
  } else {
    ties++;
    result.innerText = "Result: It's a draw!";
  }
}

// VIEWS
function showPlayerRollResult() {
  playerRollText.innerText = "Player Roll: " + playerRoll;
}

function showAiRollResult() {
  aiRollText.innerText = "AI Roll: " + aiRoll;
}

function updateScoreboard() {
  scoreboardPlayer.innerText = "Player Score: " + playerScore;
  scoreboardAi.innerText = "AI Score: " + aiScore;
  scoreboardDraw.innerText = "Draws: " + ties;
}

// GIF DISPLAY
let showGifButton = document.getElementById("showGifButton");
let gifContainer = document.getElementById("gifContainer");

showGifButton.addEventListener("click", function() {
  gifContainer.style.display = "flex"; // Show the GIF container
});

// Load game function (optional, implement as needed)
function loadGame() {
  // You can add code here to load previous scores if necessary
}

// Save game function (optional, implement as needed)
function saveGame() {
  // You can add code here to save scores if necessary
}


