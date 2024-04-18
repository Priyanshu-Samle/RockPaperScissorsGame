
let img = document.querySelectorAll("#img1");
let msg = document.querySelector(".msg");

let userScore = document.querySelector(".user");
let compScore = document.querySelector(".computer");
let user = 0;
let computer = 0;

let showWinner = (win, userChoice, compChoice)=>{
    if(win){

        user++;
        userScore.innerText = user;
        msg.innerText = "You win";
    }
    else{
        computer ++;
        compScore.innerText = computer;
        msg.innerText = "Computer win";
    }
}

let draw = ()=>{

    msg.innerText = "Mathch draw please play again";
}



let genrateCompChoice = ()=>{

    let arr = ["Paper","Rock","scissors"];

    const random = Math.floor(Math.random()*3);

    return arr[random];
}
const playGame = (userChoice)=>{

    const compChoice = genrateCompChoice();

    if(userChoice === compChoice){
        draw();
    }
    else{

        let win = true;
        if(userChoice === "Rock"){
            win = compChoice === "Paper" ? false:true;
        }
        else if(userChoice==="Paper"){
            win = compChoice==="Scissors"?false:true;
        }
        else{
            win = compChoice==="Rock"?false:true;
        }

        showWinner(win, userChoice,compChoice);
    }
}
img.forEach((choice)=>{
    
    choice.addEventListener("click", ()=>{

        const userChoice = choice.getAttribute("class");
        console.log(userChoice);
        playGame(userChoice);
    });
});