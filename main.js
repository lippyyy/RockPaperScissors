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
    let draw = true
    while (draw == true) {
        if (playerSelection == computerSelection) {
            console.log("Draw! Go Again.")
            playerSelection = getUserChoice()
            computerSelection = getComputerChoice()
        } if (playerSelection == "ROCK" && computerSelection == "PAPER") {
            console.log("You Lose! Paper beats Rock.")
        } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
            console.log("You Win! Rock beats Scissors.")
        } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
            console.log("You Win! Paper beats Rock.")
        } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
            console.log("You Lose! Scissors beats Paper.")
        } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
            console.log("You Lose! Rock beats Scissors.")
        } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
            console.log("You Win! Scissors beats Paper.")
        }

        if (playerSelection != computerSelection) {
            draw = false
        }
    }
}

playerSelection = getUserChoice();
computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);
