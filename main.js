function getComputerChoice() {
    let randomNum = Math.trunc(Math.random() * 3)
    if (randomNum == 0) {
        console.log("Rock.")
    } else if (randomNum == 1) {
        console.log("Paper.")
    } else if (randomNum == 2) {
        console.log("Scissors.")
    }
}

function getUserChoice() {
    let userChoice = prompt("Rock, Paper, or Scissors?")
    return userChoice
}

function game(playerSelection, computerSelection) {

}


