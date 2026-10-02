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
        return "scissor";
    }
}

const rockChoice =  document.querySelector("#rock");
rockChoice.addEventListener("click", () => playRound("rock", getComputerChoice()));

const paperChoice =  document.querySelector("#paper");
paperChoice.addEventListener("click", () => playRound("paper", getComputerChoice()));

const scissorChoice =  document.querySelector("#scissor");
scissorChoice.addEventListener("click", () => playRound("scissor", getComputerChoice()));

const announce = document.createElement("h3");
const score = document.createElement("p");

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice == "rock" && computerChoice == "paper"){
        announce.textContent = "You lose! Paper beats Rock.";
        computerScore++;
        score.textContent = humanScore + ":" + computerScore;
    }
    else if(humanChoice == "rock" && computerChoice == "rock"){
        announce.textContent = "Draw! You both picked Rock";
        computerScore++;
        humanScore++;
        score.textContent = humanScore + ":" + computerScore;
    }
    else if(humanChoice == "rock" && computerChoice == "scissor"){
        announce.textContent = "You win! Rock beats scissors";
        humanScore++;
        score.textContent = humanScore + ":" + computerScore;
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        announce.textContent = "You win! Paper beats Rock";
        humanScore++;
        score.textContent = humanScore + ":" + computerScore;
    }
    else if(humanChoice == "paper" && computerChoice == "paper"){
        announce.textContent = "Draw! You both picked Paper";
        humanScore++;
        computerScore++;
        score.textContent = humanScore + ":" + computerScore;
    }
    else if(humanChoice == "paper" && computerChoice == "scissor"){
        announce.textContent = "You lose! Scissors beat Paper";
        computerScore++;
        score.textContent = humanScore + ":" + computerScore;
    }
    else if(humanChoice == "scissor" && computerChoice == "rock"){
        announce.textContent = "You lose! Rock beats scissors";
        computerScore++;
        score.textContent = humanScore + ":" + computerScore;
    }
    else if(humanChoice == "scissor" && computerChoice == "paper"){
        announce.textContent = "You win! Scissors beat Paper";
       humanScore++;
       score.textContent = humanScore + ":" + computerScore;
    }
    else{
        announce.textContent = "Draw! You both picked Scissor";
        humanScore++;
        computerScore++;
        score.textContent = humanScore + ":" + computerScore;
    }
}

const result_shower = document.createElement("div");
document.body.appendChild(result_shower);
result_shower.appendChild(announce);
result_shower.appendChild(score);

