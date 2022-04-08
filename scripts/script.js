const MOVES = ['ROCK', 'PAPER', 'SCISSORS'];
const WINS = ['ROCKSCISSORS', 'PAPERROCK', 'SCISSORSPAPER'];
let computerPlay = () => MOVES[Math.floor(Math.random() * 3)];
let playerSelection;
let playerWins;
let computerWins;

function getPlayerSelection() {
    playerSelection = undefined;

    while(!playerSelection) {
        playerSelection = prompt("Rock, Paper or Scissors?").toUpperCase();

        if (!MOVES.includes(playerSelection)) {
            alert("Invalid input, try again.")
            playerSelection = undefined;
        }
    }
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection == computerSelection) {
        return `Draw, you played ${playerSelection}, and it does nothing against the computer's ${computerSelection}!`;
    } else if (WINS.includes(playerSelection + computerSelection)) {
        playerWins++;
        return `Win, your ${playerSelection} beats the computer's ${computerSelection}!`;
    } else {
        computerWins++;
        return `Lose, the computer's ${computerSelection} beats your ${playerSelection}..`;
    }

}