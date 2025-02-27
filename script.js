let callRandom = Math.floor(Math.random() * 3)

function getComputerChoice(computerPlay) {
  if(computerPlay == 0) {
    return "Rock"
  }
  else if(computerPlay == 1) {
    return "Paper"
  }
  else if(computerPlay == 2) {
    return "Scissors"
  }
}