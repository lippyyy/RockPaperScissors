function getComputerChoice() {
    let randomNum = Math.trunc(Math.random() * 3);
    let computerChoice;
    if (randomNum == 0) {
        computerChoice = "ROCK";
    } else if (randomNum == 1) {
        computerChoice = "PAPER";
    } else if (randomNum == 2) {
        computerChoice = "SCISSORS";
    }
    return computerChoice;
}

function getUserChoice() {
    let userChoice = prompt("ROCK, PAPER, or SCISSORS?");
    userChoice = userChoice.toUpperCase();
    return userChoice;
}

function playRound(playerSelection, computerSelection) {
    
}

playerSelection = getUserChoice();
computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);
