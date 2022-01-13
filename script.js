function computerPlay() {
    const rockPaperScissorArr = ['rock', 'paper', 'scissor'];
    let randomIndex = Math.floor(Math.random() * rockPaperScissorArr.length);
    return rockPaperScissorArr[randomIndex];
}

function playerChoice() {
    /* 
        As u may have figured there only three choices: rock, paper, scissor (in lower case).
        make a typo, leave it blank or type anything else, and YOU LOSE! 
    */

    let regex = /scissor|paper|rock/;
    choice = prompt('Choose Your Weapon!').toLowerCase();
    while(regex.test(choice) === false) {
        choice = prompt('Choose Your Weapon!').toLowerCase();
    }

    return choice;
}

function gameRound(computerSelection, playerSelection) {
    if(computerSelection === 'rock' && playerSelection === 'paper') {
        console.log(`Paper beats Rock YOU WIN!`);
    }

    else if(computerSelection === 'scissor' && playerSelection === 'rock') {
        console.log('Rock beats Scissor YOU WIN!');
    }

    else if(computerSelection === 'paper' && playerSelection === 'scissor') {
        console.log('Scissor beats Paper YOU WIN!');
    }

    else if (computerSelection === playerSelection) {
        console.log("DRAW!");
    }

    else {
        console.log(`${computerSelection} beats ${playerSelection} YOU LOSE!`);
    }
}

function game() {
    for(let round = 0; round < 5; round++) {
        gameRound(computerPlay(), playerChoice());
    }
}

game();