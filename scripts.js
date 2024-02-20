
let playerScore = 0;
let computerScore = 0;

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
      

// Function that plays five rounds, keeps track of score and announces winner each round

    function playRound(playerSelection, ComputerSelection) {
        console.log("Player chose: " + playerSelection);
        console.log("Computer chose: " + ComputerSelection);
       
        ComputerSelection = ComputerSelection.toLowerCase(); 
    
        if (playerSelection === ComputerSelection) {
        console.log("It's a tie!");
        } else if (
        (playerSelection === "rock" && ComputerSelection === "scissors") ||
        (playerSelection === "paper" && ComputerSelection === "rock") ||
        (playerSelection === "scissors" && ComputerSelection === "paper")
        ) {
            playerScore++;
        console.log("You win! " + playerSelection + " beats " + ComputerSelection);
        } else {
            computerScore++;
        console.log("You lose! " + ComputerSelection + " beats " + playerSelection);
        }
    }


// Make it replayable

function replayRound() {
    const playerSelection = getPlayerSelection(); 
    const ComputerSelection = getComputerSelection(); 
  
    playRound(playerSelection, ComputerSelection); 
  
    const playAgainInput = confirm("Do you want to play again?");
    
    if (playAgainInput) {
      replayRound(); 
    } else {
      console.log("Thanks for playing!");
    }
  }
  

// Write a game() function that contains the playRound() function to play a best of 5 
// Keep track of Scores

 function bestOfFive() {
    let gameOver = false;

    for (let round = 1; round <= 5 && !gameOver; round++) {

    const playerSelection = getPlayerSelection(); 
    const ComputerSelection = getComputerSelection(); 
      console.log("Round" + round);
      
      playRound(playerSelection, ComputerSelection); 

  
      console.log("Player Score: " + playerScore + "Computer Score: " + computerScore);
  
      if (playerScore >= 3 || computerScore >= 3) {
        gameOver = true;
      }
    }
  
    if (playerScore > computerScore) {
      console.log("Player wins the best of five!");
    } else if (computerScore > playerScore) {
      console.log("Computer wins the best of five!");
    } else {
      console.log("It's a tie in the best of five!");
    }
  }
  
  // bestOfFive();
  
// Creating UI

const HomeScreen = document.querySelector("#HomeScreen")
const ChooseGameScreen = document.querySelector("#ChooseGameScreen")

const PlayBtn = document.querySelector("#PlayBtn")


// press Play Btn 

PlayBtn.addEventListener("click", () => ToggleHiddenClass([HomeScreen, ChooseGameScreen]))

function ToggleHiddenClass(screens){
  screens.forEach(screen => screen.classList.toggle('hidden'))
}