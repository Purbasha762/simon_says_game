let gameSeq= [];
let userSeq= [];

let btns=["red","yellow","green","blue"];

let started = false;
let level = 0;
let highest = 0; 

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    
    if(started==false){
        console.log("Game is started!");
        started=true;
    }
    levelUp();
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);

}


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randColor=btns[Math.floor(Math.random()*4)];
    let randbtn=document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function btnPress(){
    //console.log("button was pressed");
    let btn=this;
    userFlash(btn);
    
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);

}


function checkAns(idx){
    // console.log(`current level:${level}`);
    //let idx=level-1;
    if(userSeq[idx]===gameSeq[idx]){
        // console.log("Value is same");
        if(userSeq.length==gameSeq.length){
            setTimeout( levelUp, 1000);   
        }
    }else{
        
        if(level>highest){
            highest=level;
        }
        h2.innerHTML=`Game Over! Your score is <b>${level}</b>.Highest Score is ${highest}. <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}