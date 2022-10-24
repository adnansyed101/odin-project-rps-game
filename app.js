// Computer Choice
function getComputerChoice() {
  // Calculating Random Choice
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choices.length);
  // Returning Random Choice
  return choices[random].toUpperCase();
}

// if playerselection is Rock and computerSelection is Scissors
//          show rock beats scissors

// if playerselection is Paper and computerSelection is Rock
//          show Paper beats Rock

// if playerselection is Scissors and computerSelection is Paper
//          show Scissors beats Paper

// if playerselection === computerSelection
//          show Draw

// else  show computerChoice beats PlayerChoice

// PlayGame function
function playRound(playerSelection, computerSelection) {
  // Case insensitive playerSelection
  const insensitive = playerSelection.toUpperCase();
  if (insensitive === "ROCK" && computerSelection === "SCISSORS") {
    console.log(
      `You Win! Player: ${insensitive} beats Computer: ${computerSelection}`
    );
  } else if (insensitive === "PAPER" && computerSelection === "ROCK") {
    console.log(
      `You Win! Player: ${insensitive} beats Computer: ${computerSelection}`
    );
  } else if (insensitive === "SCISSORS" && computerSelection === "PAPER") {
    console.log(
      `You Win! Player: ${insensitive} beats Computer: ${computerSelection}`
    );
  } else if (insensitive === computerSelection) {
    console.log(
      `Draw! Player: ${insensitive} draws Computer: ${computerSelection}`
    );
  } else {
    console.log(
      `You Lose! Computer: ${computerSelection} beats Player: ${insensitive}`
    );
  }
}

const playerChoice = "Paper";
const computerChoice = getComputerChoice();

playRound(playerChoice, computerChoice);
