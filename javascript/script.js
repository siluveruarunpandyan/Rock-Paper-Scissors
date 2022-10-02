'use strict';



//elements
const userScoreEl = document.getElementById('user-score');
const compScoreEl = document.getElementById('comp-score');
const userChoiceEl = document.getElementById('user-choice');
const compChoiceEl = document.getElementById('comp-choice')
const resultEl = document.getElementById('result');
// console.log(userScoreEl);
// console.log(compScoreEl);
//console.log(userChoiceEl);
//console.log(compChoiceEl);
// console.log(resultEl);

//global variables
// let userChoice = '';
// let compChoice = '';
let userScore = 0;
    let compScore = 0;


//functions
const getCompChoice = function(){
    const weapons = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.trunc(Math.random()*3);
    const randomChoice = weapons[randomNumber];
    return randomChoice;
    
}

const getResult = function(userChoice, compChoice){
if (userChoice === 'rock'){
    if(compChoice === 'rock'){
        return 'Draw';
    }else if(compChoice === 'paper'){
        return 'lost';
    }else if (compChoice === 'scissors'){
        return 'won';
    }
}else if(userChoice === 'paper'){
    if(compChoice === 'rock'){
        return 'won';
    }else if(compChoice === 'paper'){
        return 'Draw';
    }else if(compChoice === 'scissors'){
        return 'lost';
    }
}else if (userChoice === 'scissors'){
    if(compChoice === 'rock'){
        return 'lost';
    }else if(compChoice === 'paper'){
        return 'won';
    }else if(compChoice === 'scissors'){
        return 'Draw';
    }
}

};

const updateScores = function(result, userChoice, compChoice){
    
    if(result === 'won'){
        userScore++;
        userScoreEl.innerText = userScore;
        resultEl.innerText = `you Won`;
    }else if(result === 'lost'){
        compScore++;
        compScoreEl.innerText = compScore;
        resultEl.innerText = `you lost`;
    }else if(result === 'Draw'){
resultEl.innerText = `Draw`;
    }
    userChoiceEl.innerText = `you choose ${userChoice.toUpperCase()}`;
    compChoiceEl.innerText = `comp choose ${compChoice.toUpperCase()}`;
}

const playGame = function(weapons){
    const userChoice = weapons;
    const compChoice = getCompChoice();
    const result = getResult(userChoice, compChoice);
    console.log(userChoice, compChoice, result);
    updateScores(result, userChoice, compChoice);
}

//event listeners

//console.log(getCompChoice());
// console.log(`user selected ${userChoice}`);
//     console.log(`comp selected ${compChoice}`);