let list = ["Rock", "Paper", "Scissors"];
let compNumber = Math.round(Math.random()*2);
let compChoice = list[compNumber];

const real = document.getElementById("choice");
const change= document.getElementById("heading")
const result = document.getElementById("message");
const any = document.getElementById("display");

const beats ={
        Rock: "Scissors",
        Paper: "Rock",
        Scissors: "Paper"
    };

    function getResult(){
        const value= real.value.trim();
        const unumber = Number(value);
        const uchoice = list[unumber -1];

        if(Number.isNaN(unumber)){
            change.innerHTML = "Enter a valid number";
            return;
        }
        if(unumber>3 || unumber<1){
            change.innerHTML = "Enter a valid number"
             document.getElementById("play").disabled=false;
            return;
        }

        if(uchoice === compChoice){
            result.textContent="It was a draw!";
            any.textContent= "You: " + uchoice + " | " + "Computer: " + compChoice;
             document.getElementById("play").disabled=false;
            return;
        }else if(beats[uchoice] === compChoice){
            result.textContent = "You win🥳🥳🥳!!! ";
            any.textContent= "You: " + uchoice + " | " + "Computer: " + compChoice;
            document.getElementById("play").disabled=false;
            return;
        }else{
            result.textContent = "Computer wins!!";
            any.textContent= "You: " + uchoice + " | " + "Computer: " + compChoice;
            document.getElementById("play").disabled=false;
            return;
        }
    }
    
    function playAgain(){
        compChoice = list[Math.round(Math.random() * 2)];

        change.innerHTML = "Rock, Paper, Scissors!!!";
        real.value ="";
        real.focus();
        document.getElementById("play").disabled=true;
    }
