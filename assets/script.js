var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above",
        ],
        answer: "all of the above",
    },
    {
        title:
            "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes",
    },
    {
        title:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log",
    },
];
var highscores = [];
var questionindex =0;
var time = 60;

document.getElementById('startBtn').onclick = function(){

    document.getElementById('startBtn').style.display ='none';
    document.getElementById('intro').style.display ='none';

showQuestion();

setInterval(()=>{
if(time >0 && questionindex< questions.length)
    {time --
    document.getElementById('time').innerHTML = time}
}, 1000);
   


}

function showQuestion(){
if(questionindex< questions.length){

    document.getElementById('question').innerHTML=
    `
    <p>${questions[questionindex].title}</p>
    `
    document.getElementById('answers').innerHTML=
    `
    <button class='btns'>${questions[questionindex].choices[0]}</button>
    <button class='btns'>${questions[questionindex].choices[1]}</button>
    <button class='btns'>${questions[questionindex].choices[2]}</button>
    <button class='btns'>${questions[questionindex].choices[3]}</button>
    `
    
} else{
    displayScore();
}
}


document.getElementById('answers').onclick= function(e){
    if(e.target.innerText ==questions[questionindex].answer ){
        document.getElementById('check').innerHTML = 'correct';
    }else{
        document.getElementById('check').innerHTML = 'wrong';
        time -= 10;
        console.log(time);
    }
questionindex++
showQuestion();
}

function displayScore(){
    document.getElementById('final').style.display='block';
    document.getElementById('question').style.display='none';
    document.getElementById('answers').style.display='none';
    document.getElementById('check').style.display='none';
    document.getElementById('scores').innerHTML = time;
    document.getElementById('time').style.display='none';
    document.getElementById('highscoreBtn').style.display='block';
}

document.getElementById('playAgainBtn').onclick = function(){
    questionindex=0;
    time=60;
    document.getElementById('playAgainBtn').style.display ='none';
    document.getElementById('final').style.display ='none';
    document.getElementById('submitBtn').style.display ='block';
    document.getElementById('scores').style.display ='block';
    document.getElementById('question').style.display ='block';
    document.getElementById('answers').style.display ='block';
    document.getElementById('check').style.display ='block';
    document.getElementById('time').style.display ='block';
    

showQuestion();


}

 document.getElementById('submitBtn').onclick= function (){
     var name = document.getElementById('name').value;
     highscores.push({name,time});
     localStorage.setItem('highscores', JSON.stringify(highscores));

 }




document.getElementById('highscoreBtn').onclick= function (){
    localStorage.setItem("highscores", JSON.stringify(highscores));
    document.getElementById('final').style.display='none';
    document.getElementById('scores').style.display='none';
    document.getElementById('submitBtn').style.display='none';
    document.getElementById('intro').style.display='none';
    document.getElementById('startBtn').style.display='none';
    document.getElementById('highscores').style.display='block';
    
    for (let i=0; i < highscores.length; i++) {
        let scoreObj = highscores[i];
        let li = document.createElement("li");
        li.textContent = scoreObj.name + ": " + scoreObj.time;
        document.getElementById('highscores').append(li);

    }
    
}
