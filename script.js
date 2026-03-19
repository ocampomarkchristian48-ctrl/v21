function startGame(){
let name=document.getElementById("playerName").value.trim();
if(name===""){ alert("Enter name"); return; }

document.getElementById("startScreen").classList.add("hidden");
document.getElementById("descScreen").classList.remove("hidden");
}

function showTopics(){
document.getElementById("descScreen").classList.add("hidden");
document.getElementById("topicScreen").classList.remove("hidden");
}

/* SAMPLE (palitan mo ng 20 each later) */
let topics={
probability:[
{q:"P(head)?",a:["1/2","1/3","1/4","1"],c:0},
{q:"P(tail)?",a:["1/2","1/3","1/4","1"],c:0},
{q:"P(6)?",a:["1/6","1/2","1/3","1/4"],c:0},
{q:"P(even)?",a:["1/2","1/3","1/6","2/3"],c:0},
{q:"P(>3)?",a:["1/2","1/3","2/3","1/6"],c:0}
],
group:[
{q:"Group has identity?",a:["Yes","No","Maybe","None"],c:0},
{q:"Closure?",a:["Yes","No","Half","None"],c:0},
{q:"Associative?",a:["Yes","No","None","Half"],c:0},
{q:"Inverse?",a:["Yes","No","None","Half"],c:0},
{q:"Set?",a:["Collection","Animal","Food","None"],c:0}
],
predicate:[
{q:"∀ ?",a:["All","Some","None","One"],c:0},
{q:"∃ ?",a:["Exist","All","None","Zero"],c:0},
{q:"Predicate?",a:["Statement","Number","Word","None"],c:0},
{q:"Logic?",a:["Thinking","Running","Jumping","None"],c:0},
{q:"Truth?",a:["True/False","Number","Word","None"],c:0}
],
counting:[
{q:"3!?",a:["6","3","9","1"],c:0},
{q:"5!?",a:["120","60","24","10"],c:0},
{q:"Permutation?",a:["Order","No order","None","Half"],c:0},
{q:"Combination?",a:["No order","Order","None","Half"],c:0},
{q:"0!?",a:["1","0","None","2"],c:0}
]
};

let currentSet=[];
let currentQuestion=0;
let score=0;

/* RANDOM 5 */
function getRandomQuestions(topic){
let arr=[...topics[topic]];
arr.sort(()=>Math.random()-0.5);
return arr.slice(0,5);
}

function selectTopic(topic){
currentSet=getRandomQuestions(topic);
currentQuestion=0;
score=0;

document.getElementById("topicScreen").classList.add("hidden");
document.getElementById("quizScreen").classList.remove("hidden");

showQuestion();
}

function showQuestion(){
let q=currentSet[currentQuestion];
document.getElementById("question").innerText=q.q;

let answers=document.getElementById("answers");
answers.innerHTML="";

q.a.forEach((ans,i)=>{
let btn=document.createElement("button");
btn.innerText=ans;

btn.onclick=function(){
if(i===q.c){
score++;
btn.style.background="green";
}else{
btn.style.background="red";
}
document.getElementById("nextBtn").classList.remove("hidden");
};

answers.appendChild(btn);
});
}

function nextQuestion(){
currentQuestion++;
document.getElementById("nextBtn").classList.add("hidden");

if(currentQuestion<5){
showQuestion();
}else{
showResult();
}
}

function showResult(){
document.getElementById("quizScreen").classList.add("hidden");
document.getElementById("resultScreen").classList.remove("hidden");

let percent=Math.round((score/5)*100);

document.getElementById("resultScore").innerText="Score: "+percent+"%";

if(percent>=70){
document.getElementById("resultTitle").innerText="PASSED 🎉";
}else{
document.getElementById("resultTitle").innerText="FAILED ❌";
}
}

function retryGame(){
location.reload();
}
