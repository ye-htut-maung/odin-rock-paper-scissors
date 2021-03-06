// RPS = Rock Paper Scissors
let RPS = ["Rock", "Paper", "Scissors"];

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
  // console.log(playerSelection);

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
      console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
      break;
    case "lose":
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
      break;
    case "draw":
      console.log(
        `You Draw! ${playerSelection} can't beat ${computerSelection}`
      );
      break;
    default:
      console.log("error");
  }
  return status;
}

function game() {
  let winCount = 0;
  let loseCount = 0;
  while (winCount < 5 && loseCount < 5) {
    let player = prompt("Enter rock, paper or scissors");
    if (!checkValidInput(player)) return "Enter vaild input";
    let computer = computerPlay();

    let status = playRound(player, computer);
    if (status === "win") {
      winCount++;
    } else if (status === "lose") {
      loseCount++;
    }
    console.log(`You: ${winCount}, Computer: ${loseCount}`);
  }
  if (winCount === 5) return "You win the game";
  else return "You lose the game";
}

console.log(game());
