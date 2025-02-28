let callRandom = Math.floor(Math.random() * 3)
let playerChoice = prompt("Please enter rock, paper, or scissors")
playerChoice = playerChoice.toLowerCase()

function getComputerChoice(computerPlay) {
  if(computerPlay == 0) {
    return "rock"
  }  else if(computerPlay == 1) {
    return "paper"
  }  else if(computerPlay == 2) {
    return "scissors"
  }
}

function getHumanChoice(humanPlay) {
    if(humanPlay == "rock") {
      return "rock";
    } else if(humanPlay == "paper") {
      return "paper";
    } else if(humanPlay == "scissors") {
      return "scissors";
    } else {
      return "Invalid selection! Please try again.";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if(humanChoice == computerChoice) {
    return "It's a tie!";
  } else if(humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    return "Rock beats scissors! You win.";
  } else if(humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    return "Scissors beats paper! You win."
  } else if(humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    return "Paper beats rock! You win."
  } else {
    computerScore++;
    return "Sorry! You lose.";
  }
}