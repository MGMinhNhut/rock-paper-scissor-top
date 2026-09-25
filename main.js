let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    let choiceReference = parseInt((Math.random() * 3) + 1);
    if(choiceReference === 1){
        return "rock";
    }
    else if(choiceReference === 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let choice =prompt("Please enter your choice: ");
    return choice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "rock"){
        console.log("Draw! You both picked Rock");
        computerScore++;
        humanScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! rock beats scissors");
        humanScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "paper"){
        console.log("Draw! You both picked Paper");
        humanScore++;
        computerScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beat Paper");
        computerScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock beats scissors");
        computerScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You win! Scissors beat Paper");
       humanScore++; 
    }
    else{
        console.log("Draw! You both picked Scissors");
        humanScore++;
        computerScore++;
    }
}
for(let i = 1; i <= 5; i++){
    let playerChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);    
}
if(humanScore > computerScore) console.log("You won! " + humanScore + "-" + computerScore);
else if(humanScore < computerScore) console.log("You lost!" + humanScore + "-" + computerScore);
else{
    console.log("Draw!" + humanScore + "-" + computerScore);
}

