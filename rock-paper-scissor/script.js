//create a function for randomly generating computer's choice
function getComputerChoice(){
    let num = Math.floor(Math.random()*3);
    // console.log(num);
    switch(num){
        case 0:
            // console.log("Rock");
            return "Rock";
            break;
        case 1:
            return "Paper";
            // console.log("Paper");
            break;
        case 2:
            return "Scissor";
            // console.log("Scissor");
            break;
    }
}

function playRound(playerSelection,computerSelection){
    if((playerSelection==="Rock" && computerSelection==="Paper")|| (playerSelection==="Paper" && computerSelection==="Scissor")
    ||(playerSelection==="Scissor" && computerSelection==="Rock")){
        //Player Lost this Round
        // console.log("You lost")
        // computerScore+=1;
        return "Lost";
    }
    
        else if((playerSelection==="Rock" && computerSelection==="Scissor")||(playerSelection==="Paper" && computerSelection==="Rock")
    ||(playerSelection==="Scissor" && computerSelection==="Paper")){
        //Player Won this Round
        // playerScore+=1;
        return "Won";
    }
}

function game(){
let chance = 5;
let computerScore=0;
let playerScore=0;

for(let i=chance;i>0;i--){
    const playerSelection = prompt("Choose:\nRock\nPaper\nScissor");
    const computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection,computerSelection);
    if(roundResult==="Lost"){
        computerScore+=1;
        console.log("You Lost");
    }
    else{
        playerScore+=1;
        console.log("You Won");
    }
}
console.log("Game Over!!\n");
console.log("Score: "+"Computer = "+computerScore+" Player = "+playerScore);
playerScore>computerScore ? console.log("Congratulations! You Won"):console.log("You Lost!!")

}

game();