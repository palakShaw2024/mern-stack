//we are diving different tark in different function
//because it makes the code reusable and easy to understand
//we can call the function anytime we want 
//this is called modular way of pogramming.

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const gencomchoice = () => { //used "random" for bringing ramdom output of the computer 
    const options=  ["rock" ,"paper" ,"scissors"];
    const randmidx= Math.floor(Math.random() * 3);
    return options[randmidx];
}

const showWinner= (userWin, userchoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
       // console.log("you win!"); , to keep in mind how the code is working.
        msg.innerText = `You Win! , Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#33A1FD";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
       // console.log("you lose"); , to help with undersanding the code.
        msg.innerText = `You loose ,  ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "#912F40 " ;
    }
};

const draw = () => {
    //console.log("its a tie"); , for keeping in mind.
    msg.innerText = "Its a Tie , play again!";
    msg.style.backgroundColor = "#8661C1 " ;
    
};

const playGame = (userchoice) => {
     console.log("user choice =", userchoice); 
     //generate computer choice
     const compChoice = gencomchoice();
     console.log("computer choice =", compChoice); 
     

     if (userchoice === compChoice) {
        draw();
     } else {
       let userWin = true;
       if(userchoice === "rock") {
        //scisssors , paper
        userWin = compChoice === "paper" ? false : true;
       }else if(userchoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
       } else {
         //rock, paper
         compChoice === "rock" ? false: true;
       }
       showWinner(userWin , userchoice, compChoice);

     };  
     
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});