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
    let draws = 0
    let playerWins = 0
    let computerWins = 0
    let draw = true;
    while (draw == true) {
        if (playerSelection == computerSelection) {
            console.log("Draw! Go Again.");
            draws++;
            playerSelection = getUserChoice();
            computerSelection = getComputerChoice();
        } if (playerSelection == "ROCK" && computerSelection == "PAPER") {
            console.log("You Lose! Paper beats Rock.");
            computerWins++;
        } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
            console.log("You Win! Rock beats Scissors.");
            playerWins++;
        } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
            console.log("You Win! Paper beats Rock.");
            playerWins++;
        } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
            console.log("You Lose! Scissors beats Paper.");
            computerWins++;
        } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
            console.log("You Lose! Rock beats Scissors.");
            computerWins++;
        } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
            console.log("You Win! Scissors beats Paper.");
            playerWins++;
        }

        if (playerSelection != computerSelection) {
            draw = false;
        }
    }
    return [draws, playerWins, computerWins];
}

function game() {
    let draws = 0;
    let wins = 0;
    let losses = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = getUserChoice();
        computerSelection = getComputerChoice();
        let results = playRound(playerSelection, computerSelection);
        
        draws = draws + results[0]
        wins = wins + results[1]
        losses = losses + results[2]

    console.log("Draws: ", draws);
    console.log("Wins: ", wins);
    console.log("Losses: ", losses);
    }
    if (wins > losses) {
        console.log("You Won the Game!")
    } else {
        console.log("You Lost the Game!")
    }
}   

game()
