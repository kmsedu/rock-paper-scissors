const MOVES = ['ROCK', 'PAPER', 'SCISSORS'];
const WINS = ['ROCKSCISSORS', 'PAPERROCK', 'SCISSORSPAPER'];
let computerPlay = () => MOVES[Math.floor(Math.random() * 3)];
let playerSelection;
let playerWins = 0;
let computerWins = 0;

function displayChoices(playerSelection, computerSelection) {
    const playerIcon = document.querySelector('#player-selection');
    const computerIcon = document.querySelector('#computer-selection');

    playerIcon.innerHTML = `<img src="./images/${playerSelection.toLowerCase()}.png">`
    computerIcon.innerHTML = `<img src="./images/${computerSelection.toLowerCase()}.png">`
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    const score = document.getElementById('score');
    const vsText = document.getElementById('vs-text');

    vsText.textContent = `VS`
    displayChoices(playerSelection, computerSelection);

    if (playerSelection == computerSelection) {
        return `Draw, you played ${playerSelection}, and it does nothing against the computer's ${computerSelection}!`;
    } else if (WINS.includes(playerSelection + computerSelection)) {
        playerWins++;
        score.textContent = `Player: ${playerWins} | Computer: ${computerWins}`;
        return `Win, your ${playerSelection} beats the computer's ${computerSelection}!`;
    } else {
        computerWins++;
        score.textContent = `Player: ${playerWins} | Computer: ${computerWins}`;
        return `Lose, the computer's ${computerSelection} beats your ${playerSelection}..`;
    }
}

function resetGame() {
    playerWins = 0;
    computerWins = 0;
    playerSelection = undefined;

    const playerIcon = document.querySelector('#player-selection');
    const computerIcon = document.querySelector('#computer-selection');
    const textWindow = document.querySelector('#text-window');
    const score = document.getElementById('score');
    const vsText = document.getElementById('vs-text');

    vsText.textContent = ``
    playerIcon.innerHTML = ``
    computerIcon.innerHTML = ``
    score.textContent = `Player: ${playerWins} | Computer: ${computerWins}`;
    textWindow.textContent = ``
    
}

const playerOptions = document.querySelectorAll('#player-options > button');
if (!playerSelection) {
    playerOptions.forEach(button => {
        button.addEventListener('click', e => {
            if (MOVES.some(ele => e.path[1].id.toUpperCase() == ele)) {
                playerSelection = e.path[1].id.toUpperCase();
                const textWindow = document.querySelector('#text-window');
                textWindow.textContent = playRound(playerSelection, computerPlay());
            }
        });
    });
}

const resetButton = document.querySelector('#reset-button');

resetButton.addEventListener('click', resetGame);

