game();

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, Paper, or Scissors?');
        const computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
    }
}

function playRound(playerSelection, computerSelection) {
    const lower = playerSelection.toLowerCase();
    const upper = playerSelection.charAt(0).toUpperCase();
    const newPlayer = upper + lower.slice(1);

    if (newPlayer === computerSelection) {
        return 'Tie!';
    }
    else if (computerSelection === 'Rock') {
        if (newPlayer === 'Paper') {
            return 'You Win! Paper beats Rock';
        }
        else if (newPlayer === 'Scissors') {
            return 'You Lose! Rock beats Scissors';
        }
    }
    else if (computerSelection === 'Paper') {
        if (newPlayer === 'Scissors') {
            return 'You win! Scissors beats Paper';
        }
        else if (newPlayer === 'Rock') {
            return 'You lose! Paper beats Rock';
        }
    }
    else if (computerSelection === 'Scissors') {
        if (newPlayer === 'Rock') {
            return 'You win! Rock beats Scissors';
        }
        else if (newPlayer === 'Paper') {
            return 'You lose! Scissors beats Paper'
        }
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
