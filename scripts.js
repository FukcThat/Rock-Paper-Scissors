// Get user input

function getPlayerSelection() {
    const playerInput = prompt("Enter Rock, Paper, or Scissors:").toLowerCase(); 

    if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
      return playerInput; 
    } else {
      alert("Invalid Input. Please try again."); 
      return getPlayerSelection(); 
    }
  }
  
  const playerSelection = getPlayerSelection();
  
  

// Get ComputerInput by random selection of "Rock", "Paper" or "Scissors"

function getComputerSelection() {
    const randomNum = Math.random(); 
      
    if (randomNum < 0.33) {
      return "Rock"; 
    } else if (randomNum < 0.66) {
      return "Paper"; 
    } else {
      return "Scissors"; 
    }
  }
      
  const ComputerSelection = getComputerSelection();
      

// Function that plays one round, return String like "You Lose! Paper beats Rock"
// Inputs are PlayerSelection and ComputerSelection
// Make PlayerInput case insensitive
// Account for Ties, make Option to replay

function playRound(playerSelection, ComputerSelection) {
    console.log("Player chose: " + playerSelection);
    console.log("Computer chose: " + ComputerSelection);
  
    ComputerSelection = ComputerSelection.toLowerCase(); // Convert computer's choice to lowercase
  
    if (playerSelection === ComputerSelection) {
      console.log("It's a tie!");
    } else if (
      (playerSelection === "rock" && ComputerSelection === "scissors") ||
      (playerSelection === "paper" && ComputerSelection === "rock") ||
      (playerSelection === "scissors" && ComputerSelection === "paper")
    ) {
      console.log("You win! " + playerSelection + " beats " + ComputerSelection);
    } else {
      console.log("You lose! " + ComputerSelection + " beats " + playerSelection);
    }
  }
  
 

playRound(playerSelection, ComputerSelection); // Play one round and display the result


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
