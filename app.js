// Computer Choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

// Score Object
let score = {
  playerScore: 0,
  computerScore: 0,
};

function playRound(playerSelection, computerSelection) {
  // Conditions for Winning
  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    score.playerScore += 1;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    score.playerScore += 1;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    score.playerScore += 1;
  } else if (playerSelection === computerSelection) {
    score.playerScore += 0;
  } else {
    score.computerScore += 1;
  }
}

// Score Validation
function scoreValidation() {
  const winner = document.querySelector(".winner");
  if (score.playerScore === 5) {
    winner.innerText = "You Win!!!";
  } else if (score.computerScore === 5) {
    winner.innerText = "You Loseee :(";
  }
}

const rpsBtns = document.querySelectorAll(".RPS");

function playGame(e) {
  const playerChoice = e.target.value;
  const computerChoice = getComputerChoice();

  playRound(playerChoice, computerChoice);
  showResult(
    playerChoice,
    computerChoice,
    score.playerScore,
    score.computerScore
  );
  rmListener();
  scoreValidation();
}

rpsBtns.forEach((btn) => btn.addEventListener("click", playGame));

function rmListener() {
  if (score.playerScore === 5 || score.computerScore === 5) {
    rpsBtns.forEach((btn) => btn.removeEventListener("click", playGame));
  }
}

function showResult(pChoice, cChoice, pScore, cScore) {
  document.querySelector(
    ".choices-result"
  ).innerText = `Player Choice: ${pChoice} VS Computer Choice: ${cChoice}`;
  document.querySelector(
    ".score-result"
  ).innerText = `Player Score: ${pScore}  | |  Computer Score: ${cScore}`;
}
