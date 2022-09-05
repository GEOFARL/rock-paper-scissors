function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) return 'rock';
    if (number === 2) return 'paper';
    if (number === 3) return 'scissors';
}


const newGameBtn = document.querySelector('#new-game');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const promptContent = document.querySelector('.prompt-container');
const playerScore = document.querySelector('.player');
const computerScore = document.querySelector('.computer');
const winnerText = document.querySelector('.winner-container');



newGameBtn.addEventListener('click', (e) => {
    e.target.style.display = 'none';
    rockBtn.style.display = 'block';
    paperBtn.style.display = 'block';
    scissorsBtn.style.display = 'block';
    winnerText.style.visibility = 'hidden';
    computerScore.innerText = '0';
    playerScore.innerText = '0';
    promptContent.innerHTML = 'Make a choice  <span>&#x25BC;</span>';
});



rockBtn.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    let playerCount = Number(playerScore.innerText);
    let computerCount = Number(computerScore.innerText);
    if (computerChoice === 'rock') {
        playerScore.innerText = `${++playerCount}`;
        computerScore.innerText = `${++computerCount}`;
    }
    if (computerChoice === 'paper') {
        computerScore.innerText = `${++computerCount}`;
    }
    if (computerChoice === 'scissors') {
        playerScore.innerText = `${++playerCount}`;
    }

    let currentPlayerScore = Number(playerScore.innerText);
    let currentComputerScore = Number(computerScore.innerText);

    if (currentComputerScore === 5 || currentPlayerScore === 5) {
        rockBtn.style.display = 'none';
        paperBtn.style.display = 'none';
        scissorsBtn.style.display = 'none';
        newGameBtn.style.display = 'block';
        promptContent.innerHTML = 'Click here to start a new game  <span>&#x25BC;</span>';
        if (currentComputerScore > currentPlayerScore) {
            winnerText.innerText = 'COMPUTER WON THE GAME!';
            winnerText.style.visibility = 'visible';
        }
        if (currentComputerScore < currentPlayerScore) {
            winnerText.innerText = 'YOU WON THE GAME!';
            winnerText.style.visibility = 'visible';
        }
        if (currentComputerScore === currentPlayerScore) {
            winnerText.innerText = 'IT\'S A TIE';
            winnerText.style.visibility = 'visible';
        }
    }
});

paperBtn.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    let playerCount = Number(playerScore.innerText);
    let computerCount = Number(computerScore.innerText);
    if (computerChoice === 'rock') {
        playerScore.innerText = `${++playerCount}`;
    }
    if (computerChoice === 'paper') {
        computerScore.innerText = `${++computerCount}`;
        playerScore.innerText = `${++playerCount}`;
    }
    if (computerChoice === 'scissors') {
        computerScore.innerText = `${++computerCount}`;
    }

    let currentPlayerScore = Number(playerScore.innerText);
    let currentComputerScore = Number(computerScore.innerText);

    if (currentComputerScore === 5 || currentPlayerScore === 5) {
        rockBtn.style.display = 'none';
        paperBtn.style.display = 'none';
        scissorsBtn.style.display = 'none';
        newGameBtn.style.display = 'block';
        promptContent.innerHTML = 'Click here to start a new game  <span>&#x25BC;</span>';
        if (currentComputerScore > currentPlayerScore) {
            winnerText.innerText = 'COMPUTER WON THE GAME!';
            winnerText.style.visibility = 'visible';
        }
        if (currentComputerScore < currentPlayerScore) {
            winnerText.innerText = 'YOU WON THE GAME!';
            winnerText.style.visibility = 'visible';
        }
        if (currentComputerScore === currentPlayerScore) {
            winnerText.innerText = 'IT\'S A TIE';
            winnerText.style.visibility = 'visible';
        }
    }
});

scissorsBtn.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    let playerCount = Number(playerScore.innerText);
    let computerCount = Number(computerScore.innerText);
    if (computerChoice === 'rock') {
        computerScore.innerText = `${++computerCount}`;
    }
    if (computerChoice === 'paper') {
        playerScore.innerText = `${++playerCount}`;
    }
    if (computerChoice === 'scissors') {
        computerScore.innerText = `${++computerCount}`;
        playerScore.innerText = `${++playerCount}`;
    }

    let currentPlayerScore = Number(playerScore.innerText);
    let currentComputerScore = Number(computerScore.innerText);

    if (currentComputerScore === 5 || currentPlayerScore === 5) {
        rockBtn.style.display = 'none';
        paperBtn.style.display = 'none';
        scissorsBtn.style.display = 'none';
        newGameBtn.style.display = 'block';
        promptContent.innerHTML = 'Click here to start a new game  <span>&#x25BC;</span>';
        if (currentComputerScore > currentPlayerScore) {
            winnerText.innerText = 'COMPUTER WON THE GAME!';
            winnerText.style.visibility = 'visible';
        }
        if (currentComputerScore < currentPlayerScore) {
            winnerText.innerText = 'YOU WON THE GAME!';
            winnerText.style.visibility = 'visible';
        }
        if (currentComputerScore === currentPlayerScore) {
            winnerText.innerText = 'IT\'S A TIE';
            winnerText.style.visibility = 'visible';
        }
    }
});