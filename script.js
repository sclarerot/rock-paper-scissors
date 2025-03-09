let callRandom = Math.floor(Math.random() * 3)
const siteBody = document.querySelector("#body")
/* let playerChoice = prompt("Please enter rock, paper, or scissors")
playerChoice = playerChoice.toLowerCase() */

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

/* function playGame() { */
const resultDisplay = document.querySelector("#display")

  let humanScore = 0;
  let computerScore = 0;
  let roundResult = "";
  let playerScoreBoard = document.querySelector("#score1")
  let computerScoreBoard = document.querySelector("#score2")

function playRound(humanChoice, computerChoice) {
  if(humanChoice == computerChoice) {
    roundResult = document.createElement("h2");
    roundResult.textContent = "It's a tie!";
    resultDisplay.appendChild(roundResult);
  } else if(humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    roundResult = document.createElement("h2");
    roundResult.textContent = "Rock beats scissors! You win.";
    resultDisplay.appendChild(roundResult);
  } else if(humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    roundResult = document.createElement("h2");
    roundResult.textContent = "Scissors beats paper! You win."
    resultDisplay.appendChild(roundResult);
  } else if(humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    roundResult = document.createElement("h2");
    roundResult.textContent = "Paper beats rock! You win."
    resultDisplay.appendChild(roundResult);
  } else {
    computerScore++;
    roundResult = document.createElement("h2");
    roundResult.textContent = "Sorry! You lose.";
    resultDisplay.appendChild(roundResult);
  }
  playerScoreBoard.textContent = humanScore;
  computerScoreBoard.textContent = computerScore;

  if(humanScore == 5) {
    roundResult = document.createElement("h2");
    siteBody.classList.toggle("bg-info")
    siteBody.classList.add("bg-light")
    roundResult.textContent = "Congratulations! You won the game.";
    roundResult.classList.add("text-success")
    resultDisplay.appendChild(roundResult);
  } else if(computerScore == 5) {
    roundResult = document.createElement("h2");
    siteBody.classList.toggle("bg-info")
    siteBody.classList.add("bg-light")
    roundResult.textContent = "Oh no! You lost the game.";
    roundResult.classList.add("text-danger")
    resultDisplay.appendChild(roundResult);
  } else {console.log("The game continues...")}
}

const playerRock = document.querySelector("#rock");
const playerPaper = document.querySelector("#paper");
const playerScissors = document.querySelector("#scissors");

playerRock.addEventListener("click", () => {
  callRandom = Math.floor(Math.random() * 3)
  console.log(playRound("rock", getComputerChoice(callRandom)))
})

playerPaper.addEventListener("click", () => {
  callRandom = Math.floor(Math.random() * 3)
  console.log(playRound("paper", getComputerChoice(callRandom)))
})

playerScissors.addEventListener("click", () => {
  callRandom = Math.floor(Math.random() * 3)
  console.log(playRound("scissors", getComputerChoice(callRandom)))
})

/* callRandom = Math.floor(Math.random() * 3)
playerChoice = prompt("Please enter rock, paper, or scissors")
playerChoice = playerChoice.toLowerCase()
console.log(playRound(getHumanChoice(playerChoice), getComputerChoice(callRandom)))
callRandom = Math.floor(Math.random() * 3)
playerChoice = prompt("Please enter rock, paper, or scissors")
playerChoice = playerChoice.toLowerCase()
console.log(playRound(getHumanChoice(playerChoice)), getComputerChoice(callRandom))
callRandom = Math.floor(Math.random() * 3)
playerChoice = prompt("Please enter rock, paper, or scissors")
playerChoice = playerChoice.toLowerCase()
console.log(playRound(getHumanChoice(playerChoice), getComputerChoice(callRandom)))
callRandom = Math.floor(Math.random() * 3)
playerChoice = prompt("Please enter rock, paper, or scissors")
playerChoice = playerChoice.toLowerCase()
console.log(playRound(getHumanChoice(playerChoice)), getComputerChoice(callRandom)) */

  /* if(humanScore > computerScore) {
    return "Congratulations! You won the game."
  } else if(humanScore < computerScore) {
    return "Sorry! You lost the game."
  } else {
    return "Nobody wins! It's a tie."
  }

console.log(playGame()) */