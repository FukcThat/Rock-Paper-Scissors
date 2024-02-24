const HomeScreen = document.querySelector("#HomeScreen")
const ChooseGameScreen = document.querySelector("#ChooseGameScreen")
const CountdownScreen = document.querySelector("#CountdownScreen")
const GameScreen = document.querySelector("#GameScreen")
const SingleRoundResultScreen = document.querySelector("#SingleRoundResultScreen")

const PlayBtn = document.querySelector("#PlayBtn")
const RockBtn = document.querySelector("#RockBtn")
const PaperBtn = document.querySelector("#PaperBtn")
const ScissorsBtn = document.querySelector("#ScissorsBtn")
const PlayAgainBtn = document.querySelector("#PlayAgainBtn")


let playerScore = 0;
let computerScore = 0;
let finalScore = 0;


// press Play Btn 
PlayBtn.addEventListener("click", () => ToggleHiddenClass([HomeScreen, ChooseGameScreen,]))


//ToggleHiddenClass Function
function ToggleHiddenClass(screens){
  screens.forEach(screen => screen.classList.toggle('hidden'))
}

// press SingleRoundBtn
SingleRoundBtn.addEventListener("click", () => {
  ToggleHiddenClass([ChooseGameScreen, CountdownScreen]) 
  DoCountdown();
  finalScore = 1;
})

function ToggleHiddenClass(screens){ 
  screens.forEach(screen => screen.classList.toggle('hidden'))
}


// RockBtn EventListener
RockBtn.addEventListener('click', () => {
  playRound("Rock", getComputerSelection())
})

// PaperBtn EventListener
PaperBtn.addEventListener('click', () => {
  playRound("Paper", getComputerSelection())
})

// ScissorsBtn EventListener
ScissorsBtn.addEventListener('click', () => {
  playRound("Scissors", getComputerSelection())
})

// PlayAgainBtn EventListener
PlayAgainBtn.addEventListener('click', () => {
  ToggleHiddenClass([SingleRoundResultScreen, HomeScreen])
})


//Countdown Function
function DoCountdown() {
  let count = 3;
  const CountdownText = document.querySelector("#CountdownText")
  CountdownText.textContent = count;

  const Interval = setInterval(() => {
    count--
    CountdownText.textContent = count;
    if (count <= 0) {
      clearInterval(Interval)
      ToggleHiddenClass([CountdownScreen, GameScreen]) 
    }
  }, 1000)
}


// Get user input
// function getPlayerSelection() {
//     const playerInput = prompt("Enter Rock, Paper, or Scissors:").toLowerCase(); 

//     if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
//       return playerInput; 
//     } else {
//       alert("Invalid Input. Please try again."); 
//       return getPlayerSelection(); 
//     }
//   }
  

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


// UpdateResult Function -> Updates result to be displayed in ResultScreens
function UpdateXBeatsYText(result) {
  const XBeatsYText = document.querySelector("#XBeatsYText");
  XBeatsYText.textContent = result;
}


//UpdateWinner Function -> Declares Winner
function UpdateWinnerText(winner) {
  const WinnerText = document.querySelector("#WinnerText")
  WinnerText.textContent = winner;
}
      

// Function that plays five rounds, keeps track of score and announces winner each round
function playRound(playerSelection, ComputerSelection) {
    console.log("Player chose: " + playerSelection);
    console.log("Computer chose: " + ComputerSelection);
    
    ToggleHiddenClass([GameScreen, SingleRoundResultScreen])

    if (playerSelection === ComputerSelection) {
    const result = "It's a tie!";
    UpdateXBeatsYText(result);
    } else if (
    (playerSelection === "Rock" && ComputerSelection === "Scissors") ||
    (playerSelection === "Paper" && ComputerSelection === "Rock") ||
    (playerSelection === "Scissors" && ComputerSelection === "Paper")
    ) {
      playerScore++;
      const result = playerSelection + " beats " + ComputerSelection + "!";
      UpdateXBeatsYText(result);
    } else {
      computerScore++;
      const result = ComputerSelection + " beats " + playerSelection + "!";
      UpdateXBeatsYText(result);
    }
    if (playerScore >= finalScore) {
      const winner = "You win!";
      UpdateWinnerText(winner);
    } 
    if (computerScore >= finalScore) {
      const winner = "Computer wins!";
      UpdateWinnerText(winner);
    }
}





// ______________________________________________________________________________________________
// ______________________________________________________________________________________________

// Make it replayable
// function replayRound() {
//     const playerSelection = getPlayerSelection(); 
//     const ComputerSelection = getComputerSelection(); 
  
//     playRound(playerSelection, ComputerSelection); 
  
//     const playAgainInput = confirm("Do you want to play again?");
    
//     if (playAgainInput) {
//       replayRound(); 
//     } else {
//       console.log("Thanks for playing!");
//     }
//   }
  

// Write a game() function that contains the playRound() function to play a best of 5 
// Keep track of Scores

//  function bestOfFive() {
//     let gameOver = false;

//     for (let round = 1; round <= 5 && !gameOver; round++) {

//     const playerSelection = getPlayerSelection(); 
//     const ComputerSelection = getComputerSelection(); 
//       console.log("Round" + round);
      
//       playRound(playerSelection, ComputerSelection); 

  
//       console.log("Player Score: " + playerScore + "Computer Score: " + computerScore);
  
//       if (playerScore >= 3 || computerScore >= 3) {
//         gameOver = true;
//       }
//     }
  
//     if (playerScore > computerScore) {
//       console.log("Player wins the best of five!");
//     } else if (computerScore > playerScore) {
//       console.log("Computer wins the best of five!");
//     } else {
//       console.log("It's a tie in the best of five!");
//     }
//   }
