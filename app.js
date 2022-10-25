// Computer Choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choices.length);

  return choices[random].toUpperCase();
}

// Score Object
let score = {
  playerScore: 0,
  computerScore: 0,
};

// PlayGame function
function playRound(playerSelection, computerSelection) {
  let winner = `You Win! Player: ${playerSelection} beats Computer: ${computerSelection}`;
  // Conditions for Winning
  if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    score.playerScore += 1;
    console.log(winner);
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    score.playerScore += 1;
    console.log(winner);
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    score.playerScore += 1;
    console.log(winner);
  } else if (playerSelection === computerSelection) {
    score.playerScore += 0;
    console.log(
      `Draw! Player: ${playerSelection} draws Computer: ${computerSelection}`
    );
  } else {
    score.computerScore += 1;
    console.log(
      `You Lose! Computer: ${computerSelection} beats Player: ${playerSelection}`
    );
  }
}

function scoreValidation(pScore, cScore) {
  if (pScore > cScore) {
    console.log(
      `You Won The Game. Player Score: ${pScore} / Computer Score: ${cScore}`
    );
  } else if (pScore < cScore) {
    console.log(
      `You Lost The Game. Computer Score: ${cScore} / Player Score: ${pScore}`
    );
  } else {
    console.log(`Draw. Player Score: ${pScore} / Computer Score: ${cScore}`);
  }
}

// Start Game Funtion
function game() {
  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("Rock, Paper, Scissors ?");
    const computerChoice = getComputerChoice();

    if (playerChoice === null) {
      alert("Please enter a choice.");
      return;
    } else {
      playerChoice = playerChoice.toUpperCase();
    }

    playRound(playerChoice, computerChoice);
  }
  scoreValidation(score.playerScore, score.computerScore);
}

game();
