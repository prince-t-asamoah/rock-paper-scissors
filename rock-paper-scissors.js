//Receive user choices
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock'|| userInput === 'paper' || userInput == 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Please choose either rock, paper or scissors');
  }
}

//Generates choice for computer
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = '';

  if (randomNumber === 0) {
    return computerChoice = 'rock';
  } else if (randomNumber === 1) {
    return computerChoice = 'paper';
  } else if (randomNumber === 2) {
    return computerChoice = 'scissors';
  }
}

//Check users and computers choice to determine winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'You won!';
  }
  if (userChoice === computerChoice) {
    return 'The game is a tie.';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer has won.';
  } else {
      return 'You won!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer has won.'
  } else {
      return 'You won!';
  }
}

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer has won.'
  } else {
      return 'You won!';
    }
  }
}

//Start game by calling this function
const playGame = () => {
  let userChoice = getUserChoice('rock');
  console.log(userChoice);

  let computerChoice = getComputerChoice();
  console.log(computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
