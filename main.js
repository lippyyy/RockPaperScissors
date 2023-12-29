function getComputerChoice() {
    let randomNum = Math.trunc(Math.random() * 3);
    let computerChoice;
    if (randomNum == 0) {
        computerChoice = "Rock";
    } else if (randomNum == 1) {
        computerChoice = "Paper";
    } else if (randomNum == 2) {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function getUserChoice() {
    let userChoice = prompt("Rock, Paper, or Scissors?");
    return userChoice;
}

function game(playerSelection, computerSelection) {
    
}

playerSelection = getUserChoice();
computerSelection = getComputerChoice();
game(playerSelection, computerSelection);
