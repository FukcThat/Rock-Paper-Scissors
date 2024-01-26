// Get user input

let PlayerSelection = prompt("Rock, Paper or Scissors?");

// Get ComputerInput by random selection of "Rock", "Paper" or "Scissors"

function getComputerSelection() {
    //make array of possible choises 
    //get random number between 0 and 2 
    //pick array slot according to number
}

// Function that plays one round, return String like "You Lose! Paper beats Rock"
// Inputs are PlayerSelection and ComputerSelection
// Make PlayerInput case insensitive
// Account for Ties, make Option to replay

function playRound(PlayerSelection, ComputerSelection) {
    // if player selection is rock and computer selection is rock = tie
    // if player selection is paper and computer selection is paper = tie
    // if player selection is scissors and computer selection is scissors = tie
    // if player selection is rock and computer selection is paper = "You lose, Paper beats Rock"
    // if player selection is rock and computer selection is scissors = "You win, Rock beats scissors"
    // if player selection is paper and computer selection is scissors = "You lose, Scissors beat Paper"
    // if player selection is paper and computer selection is rock = "You win, Paper beats Rock"
    // if player selection is scissors and computer selection is rock = "You lose, Rock beats Scissors"
    // if player selection is scissors and computer selection is paper = "You win, Scissors beats Paper"
}

// Write a game() function that contains the playRound() function to play a best of 5 
// Keep track of Scores

function game() {
    // 

    // Game 1, Player wins = 1:0
    // Game 2, Player wins = 2:0
    // Game 3, Player wins = 3:0 => Computer can't win, Game is over, Player wins same vice versa

    // Game 1, Player wins = 1:0
    // Game 2, Computer wins = 1:1
    // Game 3, Player wins = 2:1
    // Game 4, Computer wins = 2:2
    // Game 5, Player/Cumputer wins 1:2 / 2:1 => Either player or computer wins

    // check which array is larger 
    // larger player array "You won the battle!"

}
