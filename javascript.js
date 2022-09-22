
const computerSelection = getComputerChoice();
const playerSelection = 'rOCK';

console.log(playRound(playerSelection, computerSelection));

function playRound(playerSelection, computerSelection) {

    const lower = playerSelection.toLowerCase();
    const upper = playerSelection.charAt(0).toUpperCase();
    const newPlayer = upper + lower.slice(1);

    if (newPlayer === computerSelection) {
        return 'Tie!';
    }
    else {
        return 'Not Tie';
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3) + 1;
    
    if (choice === 1) {
        return 'Rock';
    }
    else if (choice === 2) {
        return 'Paper';
    }
    else if (choice === 3) {
        return 'Scissors';
    }
}
