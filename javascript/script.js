'use strict';

//elements

//global variables
let userChoice = '';
let compChoice = '';


//functions
const getCompChoice = function(){
    const weapons = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.trunc(Math.random()*3);
    const randomChoice = weapons[randomNumber];
    return randomChoice;
    
}

const playGame = function(weapons){
    userChoice = weapons;
    compChoice = getCompChoice();
    console.log(`user selected ${userChoice}`);
    console.log(`comp selected ${compChoice}`);
}

//event listeners

//console.log(getCompChoice());