//create list of choices
const choice = ['scissor','paper','rock'];

let playerScore = 0;
let computerScore = 0;
let round = 0;

//event listner
const imageButtons = document.querySelectorAll("img");
const playerScoreCard = document.querySelector("#playerScore");
const computerScoreCard = document.querySelector("#computerScore");
const roundDisplay = document.querySelector("#round");


function getComputerChoice(){
    //return random computer choice
    let choiceNumber =  Math.floor(Math.random()*3);
    return choice[choiceNumber];
}
function updateScore(){
    playerScoreCard.textContent = `Player: ${playerScore}`;
    computerScoreCard.textContent = `Computer: ${computerScore}`;
    roundDisplay.textContent = `Round: ${round}`;
}

function playRound(humanSelection){
    
    let computerSelection = getComputerChoice();
    round++;

    if (humanSelection === 'paper'){
        if (computerSelection === 'scissor'){
            computerScore++;
        }else{
            playerScore++
        }
    }
    else if(humanSelection === 'scissor'){
        if (computerSelection === 'rock'){
            computerScore++;
        }else{
            playerScore++;
        }
    }
    else if(humanSelection === 'rock'){
        if (computerSelection === 'paper'){
            computerScore++;
        }else{
            playerScore++;
        }
    }
    updateScore();

    if (playerScore === 3 || computerScore === 3 || round ===5){
        declareWinner();
    }
}

function declareWinner(){
    if(playerScore > computerScore){
        alert("Player Wins!");
    }
    else if(computerScore > playerScore){
        alert("Player Wins")
    }else{
        alert("It's a tie overall");
    }

    //reset Game
    alert("Game Over");

    playerScore = 0;
    computerScore = 0;
    round = 0;
    updateScore();
}


imageButtons.forEach((img) =>{
    img.addEventListener("click",()=>{
        let humanChoice = img.id;
        playRound(img.id);
        
    });
});

