// Computer Choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choices.length);

  return choices[random].toUpperCase();
}

// PlayGame function
function playRound(playerSelection, computerSelection) {
  let winner = `You Win! Player: ${playerSelection} beats Computer: ${computerSelection}`;
  // Conditions for Winning
  if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    return winner;
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    return winner;
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    return winner;
  } else if (playerSelection === computerSelection) {
    return `Draw! Player: ${playerSelection} draws Computer: ${computerSelection}`;
  } else {
    return `You Lose! Computer: ${computerSelection} beats Player: ${playerSelection}`;
  }
}

// Score Object
let score = {
  playerScore: 0,
  computerScore: 0,
};

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
  }
}

game();
