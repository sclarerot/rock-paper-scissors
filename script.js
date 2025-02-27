let callRandom = Math.floor(Math.random() * 3)

function getComputerChoice(computerPlay) {
  if(computerPlay == 0) {
    return "rock"
  }
  else if(computerPlay == 1) {
    return "paper"
  }
  else if(computerPlay == 2) {
    return "scissors"
  }
}