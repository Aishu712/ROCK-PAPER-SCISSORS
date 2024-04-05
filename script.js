let user = document.getElementById('user-display');
let comp = document.getElementById('computer-display');
let res = document.getElementById('display');
let a = document.getElementById('computerRes');
let b = document.getElementById('userRes');
var compScore = 0;
var userScore = 0;
var s;
let computer;
let userD;
let arr = document.querySelectorAll('button');
arr.forEach(i=> i.addEventListener("click",(e)=>{
    userD = e.target.innerHTML;
    user.innerHTML=userD;
    compGenerate();
    checkit();


}));

function compGenerate(){
    s = Math.floor(Math.random()*3)
    console.log(s);
    if(s === 0){
        computer = "paper";
    }
    else if(s === 1){
        computer = "scissors";
    }
    else if(s === 2){
        computer = "rock";
    }
    comp.innerHTML = computer;

}
function checkit(){
    if(computer === userD){
        res.innerHTML= " tie";
    }
    else if(computer === "rock" && userD === "paper"){
        userScore+=1;
        res.innerHTML = "you won!";
    }
    else if(computer === "rock" && userD === "scissors"){
        compScore+=1
        res.innerHTML= "you lost :(";
    }
    else if(computer === "paper" && userD === "rock"){
        compScore+=1
        res.innerHTML= "you lost :(";

    }
    else if(computer === "paper" && userD === "scissors"){
        userScore+=1;
        res.innerHTML = "you won!";

    }
    else if(computer === "scissors" && userD === "rock"){
        userScore+=1;
        res.innerHTML = "you won!";

    }
    else if(computer === "scissors" && userD === "paper"){
        compScore+=1
        res.innerHTML= "you lost :(";
    }
    a.innerHTML = compScore;
    b.innerHTML = userScore
}