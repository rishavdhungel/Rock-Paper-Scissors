//create list of choices
const choice = ['scissor','paper','rock'];
let playerScore = 0;
let computerScore = 0;


function getComputerChoice(){
    //return random computer choice
    let choiceNumber =  Math.floor(Math.random()*3);
    return choice[choiceNumber];
}


//get human choice using prompt
function getHumanChoice(){

}


function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            console.log("You lose! Paper beats Rock");
        } else if (computerChoice === 'scissors') {
            console.log("You win! Rock beats Scissors");
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            console.log("You win! Paper beats Rock");
        } else if (computerChoice === 'scissors') {
            console.log("You lose! Scissors beats Paper");
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            console.log("You lose! Rock beats Scissors");
        } else if (computerChoice === 'paper') {
            console.log("You win! Scissors beats Paper");
        }
    } else {
        console.log("Invalid choice. Please choose 'rock', 'paper', or 'scissors'.");
    }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
console.log("Human Choice: "+ humanChoice);
console.log("Computer Choice: "+ computerChoice);
playRound(humanChoice,computerChoice);