let gameSeq=[];
let userSeq=[];
let btns = ["yellow", "green", "red", "blue"];
let started = false;
let level = 0;
let highestscore = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game");
        started= true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
     btn.classList.remove("flash")
    }, 1000)
 };
 function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
     btn.classList.remove("userFlash")
    }, 250)
 };
function levelUp(){
    userSeq=[];
   level++;
   h2.innerHTML= `Level ${level}`;
   let randIdx = Math.floor(Math.random()*3);
   let randColor = btns[randIdx];
   let ranBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
   gameFlash(ranBtn);
   console.log(gameSeq);
}

function checkAns(idx){
     if(userSeq[idx]==gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
           setTimeout(levelUp,1000);

    }   }
   else{
    h2.innerHTML = `Game Over! Your Score is <b>${level}</b><BR>Press any key to start.` ;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },200);
    let score= level;
    if(score>highestscore){
        highestscore=score;

    }
    let h3 = document.querySelector(".hs");
    h3.innerHTML= `High Score : ${highestscore}`
    reset();    

}
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    // userSeq.push(btn.classList[1]);
    // console.log(userSeq);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level = 0;
}

