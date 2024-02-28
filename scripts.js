const HomeScreen = document.querySelector("#HomeScreen");
const ChooseGameScreen = document.querySelector("#ChooseGameScreen");
const CountdownScreen = document.querySelector("#CountdownScreen");
const GameScreen = document.querySelector("#GameScreen");
const ResultScreen = document.querySelector("#ResultScreen");

const PlayBtn = document.querySelector("#PlayBtn");
const RockBtn = document.querySelector("#RockBtn");
const PaperBtn = document.querySelector("#PaperBtn");
const ScissorsBtn = document.querySelector("#ScissorsBtn");
const PlayAgainBtn = document.querySelector("#PlayAgainBtn");

let playerScore = 0;
let computerScore = 0;
let finalScore = 0;
let countdownTimeInSeconds = 3;

//ToggleHiddenClass Function
function ToggleHiddenClass(screens) {
  screens.forEach((screen) => screen.classList.toggle("hidden"));
}

// press Play Btn
PlayBtn.addEventListener("click", () =>
  ToggleHiddenClass([HomeScreen, ChooseGameScreen])
);

// press SingleRoundBtn
SingleRoundBtn.addEventListener("click", () => {
  ToggleHiddenClass([ChooseGameScreen, CountdownScreen]);
  DoCountdown();
  finalScore = 1;
});

// BestOf5Btn
BestOf5Btn.addEventListener("click", () => {
  ToggleHiddenClass([ChooseGameScreen, CountdownScreen]);
  DoCountdown();
  finalScore = 3;
});

//NextRoundBtn
NextRoundBtn.addEventListener("click", () => {
  ToggleHiddenClass([RoundResultScreen, CountdownScreen]);
  DoCountdown();
});

// RockBtn EventListener
RockBtn.addEventListener("click", () => {
  playRound("Rock", getComputerSelection());
});

// PaperBtn EventListener
PaperBtn.addEventListener("click", () => {
  playRound("Paper", getComputerSelection());
});

// ScissorsBtn EventListener
ScissorsBtn.addEventListener("click", () => {
  playRound("Scissors", getComputerSelection());
});

// PlayAgainBtn EventListener
PlayAgainBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  countdownTimeInSeconds = 3;
  ToggleHiddenClass([ResultScreen, HomeScreen]);
});

//Countdown Function
function DoCountdown() {
  const CountdownText = document.querySelector("#CountdownText");
  CountdownText.textContent = countdownTimeInSeconds;

  const Interval = setInterval(() => {
    countdownTimeInSeconds--;
    CountdownText.textContent = countdownTimeInSeconds;
    if (countdownTimeInSeconds <= 0) {
      clearInterval(Interval);
      ToggleHiddenClass([CountdownScreen, GameScreen]);
    }
  }, 1000);
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

function PlayerWins(playerSelection, ComputerSelection) {
  return (
    (playerSelection === "Rock" && ComputerSelection === "Scissors") ||
    (playerSelection === "Paper" && ComputerSelection === "Rock") ||
    (playerSelection === "Scissors" && ComputerSelection === "Paper")
  );
}

// Function that plays five rounds, keeps track of score and announces winner each round
function playRound(playerSelection, ComputerSelection) {
  let result;

  if (playerSelection === ComputerSelection) {
    result = "It's a tie!";
  } else if (PlayerWins(playerSelection, ComputerSelection)) {
    playerScore++;
    result = playerSelection + " beats " + ComputerSelection + "!";
  } else {
    computerScore++;
    result = ComputerSelection + " beats " + playerSelection + "!";
  }

  XBeatsYText.textContent = result;
  ResultText.textContent = result;

  if (playerScore >= finalScore) {
    WinnerText.textContent = "You win!";
    ToggleHiddenClass([GameScreen, ResultScreen]);
    return;
  }

  if (computerScore >= finalScore) {
    WinnerText.textContent = "Computer wins!";
    ToggleHiddenClass([GameScreen, ResultScreen]);
    return;
  }

  // If the function gets to here without returning, neither player has won yet

  if (finalScore == 1) {
    // If game is best of one at this point and no player has beaten the final score its a tie
    WinnerText.textContent = "Game is a tie!";
    ToggleHiddenClass([GameScreen, ResultScreen]);
    return;
  }
  // If the function gets to here, then its a Best of Five and neither player has won the game yet

  ScoreText.textContent =
    "Player: " + playerScore + "/ Computer: " + computerScore;
  ToggleHiddenClass([GameScreen, RoundResultScreen]);
}
