const questions = [

{
q:"What subject do you like most?",
a:["Art","Math","Computers","Biology"],
c:["Architect","Engineer","Programmer","Doctor"]
},

{
q:"What do you prefer?",
a:["Design","Logic","Coding","Helping"],
c:["Architect","Engineer","Programmer","Doctor"]
},

{
q:"Your strongest skill?",
a:["Creativity","Problem solving","Tech skills","Communication"],
c:["Architect","Engineer","Programmer","Doctor"]
},

{
q:"What work style?",
a:["Creative","Technical","Digital","Medical"],
c:["Architect","Engineer","Programmer","Doctor"]
},

{
q:"What motivates you?",
a:["Design","Money","Technology","Helping people"],
c:["Architect","Engineer","Programmer","Doctor"]
}

];

let i = 0;

let score = {
Architect:0,
Engineer:0,
Programmer:0,
Doctor:0
};

//  LOAD QUESTION
function load(){

document.getElementById("question").innerText =
questions[i].q;

let btns = document.querySelectorAll(".answers button");

btns.forEach((b,index)=>{
b.innerText = questions[i].a[index];
});

updateProgress();

}

//  ANSWER
function answer(index){

let career = questions[i].c[index];

score[career]++;

i++;

if(i < questions.length){
load();
}
else{

let best = "";
let max = 0;

for(let k in score){
if(score[k] > max){
max = score[k];
best = k;
}
}

// save result
localStorage.setItem("career", best);

// go results
window.location.href = "results.html";
}

}

//  PROGRESS BAR
function updateProgress(){

let percent = Math.round((i / questions.length) * 100);

document.getElementById("progressFill").style.width = percent + "%";
document.getElementById("progressText").innerText = percent + "%";

}

load();