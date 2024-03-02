const HomeScreen = document.querySelector("#HomeScreen");
const ChooseGameScreen = document.querySelector("#ChooseGameScreen");
const CountdownScreen = document.querySelector("#CountdownScreen");
const GameScreen = document.querySelector("#GameScreen");
const ResultScreen = document.querySelector("#ResultScreen");

const PlayBtn = document.querySelector("#PlayBtn");
const RockBtn = document.querySelector("#RockBtn");
const PaperBtn = document.querySelector("#PaperBtn");
const ScissorsBtn = document.querySelector("#ScissorsBtn");
const NextRoundBtn = document.querySelector("#NextRoundBtn");
console.log(NextRoundBtn);
const PlayAgainBtn = document.querySelector("#PlayAgainBtn");

let playerScore = 0;
let computerScore = 0;
let finalScore = 0;
let countdownTimeInSeconds = 3;
let roundCount = 0;

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
  ToggleHiddenClass([ResultScreen, CountdownScreen]);
  countdownTimeInSeconds = 3;
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

function SingleRoundResults() {
  RoundText.classList.add("hidden");
  ScoreText.classList.add("hidden");
  PlayerChoiceText.classList.remove("hidden");
  ComputerChoiceText.classList.remove("hidden");
  XBeatsYText.classList.remove("hidden");
  RoundWinnerText.classList.remove("hidden");
  GameWinnerText.classList.add("hidden");
  NextRoundBtn.classList.add("hidden");
  PlayAgainBtn.classList.remove("hidden");
}

function Bestof1to4() {
  RoundText.classList.remove("hidden");
  ScoreText.classList.remove("hidden");
  PlayerChoiceText.classList.remove("hidden");
  ComputerChoiceText.classList.remove("hidden");
  XBeatsYText.classList.remove("hidden");
  RoundWinnerText.classList.remove("hidden");
  GameWinnerText.classList.add("hidden");
  NextRoundBtn.classList.remove("hidden");
  PlayAgainBtn.classList.add("hidden");
}

function FinalResult() {
  RoundText.classList.remove("hidden");
  ScoreText.classList.remove("hidden");
  PlayerChoiceText.classList.remove("hidden");
  ComputerChoiceText.classList.remove("hidden");
  XBeatsYText.classList.remove("hidden");
  RoundWinnerText.classList.remove("hidden");
  GameWinnerText.classList.remove("hidden");
  NextRoundBtn.classList.add("hidden");
  PlayAgainBtn.classList.remove("hidden");
}

function RoundWinHelper(WinnerText, GameWText) {
  RoundWinnerText.textContent = WinnerText;
  ToggleHiddenClass([GameScreen, ResultScreen]);
  GameWinnerText.textContent = GameWText;
  finalScore == 3 && FinalResult();
  ScoreText.textContent =
    "Player: " + playerScore + "/ Computer: " + computerScore;
}

// Function that plays five rounds, keeps track of score and announces winner each round
function playRound(playerSelection, ComputerSelection) {
  let result;

  roundCount++;
  RoundText.textContent = "Round " + roundCount;

  PlayerChoiceText.textContent = playerSelection;
  ComputerChoiceText.textContent = ComputerSelection;

  if (playerSelection === ComputerSelection) {
    result = "It's a tie!";
    RoundWinnerText.textContent = "";
  } else if (PlayerWins(playerSelection, ComputerSelection)) {
    playerScore++;
    result = playerSelection + " beats " + ComputerSelection + "!";
    RoundWinnerText.textContent = "You win!";
  } else {
    computerScore++;
    result = ComputerSelection + " beats " + playerSelection + "!";
    RoundWinnerText.textContent = "You lose!";
  }

  XBeatsYText.textContent = result;

  if (finalScore == 1) SingleRoundResults();

  if (playerScore >= finalScore) {
    return RoundWinHelper("You win!", "You win the Best of 5!");
  }

  if (computerScore >= finalScore) {
    return RoundWinHelper("You lose!", "You lose the Best of 5!");
  }

  // If the function gets to here without returning, neither player has won yet

  if (finalScore == 1) {
    // If game is best of one at this point and no player has beaten the final score its a tie
    RoundWinnerText.textContent = "Game is a tie!";
    return ToggleHiddenClass([GameScreen, ResultScreen]);
  }
  // If the function gets to here, then its a Best of Five and neither player has won the game yet
  Bestof1to4();

  ScoreText.textContent =
    "Player: " + playerScore + "/ Computer: " + computerScore;
  ToggleHiddenClass([GameScreen, ResultScreen]);
}
