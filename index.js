/* 
1. Write a function which will generate computer's choice of rock, paper or scissors.
    1.1 Create a variable which will contain a random number from 1 to 3.
    1.2 Using if else statements assign a rock, paper or scissors respectively to the number.
    1.3 Return computer's choice.
2. Create a function which will get the input from the user of them choice.
    2.1 Create a variable and assign it user's option which in turn we will get by means of prompt method.
    2.2 Return this variable.
3. Create a function which will play one round.
    3.1 Specify function's parameters which should include computer's and person's choices.
    3.2 Create if else statements to check how is the winner of the round.
    3.3 Return the name of the winner.
4. Create a function which will generate one game which will consist of 5 rounds.
    4.1 Create two counters: one for player's wins, another one for computer's ones, initialize its values to zero;
    4.2 Create for loop which will iterate 5 times.
        4.2.1 Call the function which generates computer's choice, save the result in the relevant variable.
        4.2.2 Call the function which prompts user for input, save the result in the relevant variable.
        4.2.3 Call the function which will execute one round and save the winner's name in the variable.
        4.2.4 Check the winner's name with both the player and the computer, add one point to the corresponding counter.
    4.3 Compare two counters using if else statements to find out who is the winner.
    4.4 Print out the name of the winner.
*/

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    if (randomNumber === 1) computerChoice = 'rock';
    if (randomNumber === 2) computerChoice = 'paper';
    if (randomNumber === 3) computerChoice = 'scissors';
    return computerChoice;
}

function getUserChoice() {
    let getIt = false;
    let userChoice;
    do {
        userChoice = window.prompt("What's you choice?").toLowerCase();
        if (!userChoice.localeCompare('rock') || !userChoice.localeCompare('paper') || !userChoice.localeCompare('scissors')) getIt = true;
        else window.alert("You should enter 'rock', 'paper' or 'scissors'!");
    } while (!getIt);
    return userChoice;
}
