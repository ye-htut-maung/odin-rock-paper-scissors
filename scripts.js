// RPS = Rock Paper Scissors
const RPS = ["Rock", "Paper", "Scissors"];
const computerResult = document.querySelector(".computerScores");
const playerResult = document.querySelector(".playerScores");
const caption = document.querySelector(".caption");

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function computerPlay() {
  return RPS[Math.floor(Math.random() * 3)];
}

function checkValidInput(userInput) {
  let userInputLowercase = userInput.toLowerCase();
  let isValid = false;
  if (
    userInputLowercase === "rock" ||
    userInputLowercase === "paper" ||
    userInputLowercase === "scissors"
  ) {
    isValid = true;
  } else {
    isValid = false;
  }
  return isValid;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);

  let status = "undecied";

  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    status = "win";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    status = "win";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    status = "win";
  } else if (playerSelection === computerSelection) {
    status = "draw";
  } else {
    status = "lose";
  }

  switch (status) {
    case "win":
      caption.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
      break;
    case "lose":
      caption.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
      break;
    case "draw":
      caption.textContent = `You Draw! ${playerSelection} can't beat ${computerSelection}`;

      break;
    default:
      console.log("error");
  }
  return status;
}

const buttons = document.querySelectorAll(".btn");
let computerPoint = 0;
let playerPoint = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let player = button.id;
    let status = playRound(player, computerPlay());

    if (status === "win") {
      playerPoint++;
    } else if (status === "lose") {
      computerPoint++;
    }

    computerResult.textContent = `Computer: ${computerPoint}`;
    playerResult.textContent = `Player: ${playerPoint}`;
    setTimeout(() => {
      if (playerPoint >= 5 || computerPoint >= 5) {
        if (playerPoint >= 5) {
          alert("You win");
        } else {
          alert("You lose");
        }
        computerPoint = 0;
        playerPoint = 0;
        computerResult.textContent = `Computer: ${computerPoint}`;
        playerResult.textContent = `Player: ${playerPoint}`;
      }
    }, 1000);
  });
});

// console.log(game());
