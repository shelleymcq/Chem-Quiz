const startBtn = document.getElementById('start');
const answerBtn = document.getElementById('answer-button1');
const begin = document.getElementById('intro');
const getQuestion = document.getElementById('question');
const correct = document.getElementById('response');
const getScore = document.getElementById('all-done');
const submitInitials = document.getElementById('input-initials');
const submitBtn = document.getElementById('submit');
const startTimer = document.getElementById('timer');


startBtn.addEventListener('click', startQuiz);
answerBtn.addEventListener('click', submitAnswer);
submitBtn.addEventListener('click', enterInitials);



function startQuiz() {
    begin.setAttribute('style', 'display: none');
    getQuestion.setAttribute('style', 'display: block')
    function timer() {
        let secondsLeft = 10;
        let timerInterval = setInterval(function() {
            secondsLeft--;
            startTimer.textContent = secondsLeft;
    
            if(secondsLeft === 0) {
                clearInterval(timerInterval);
                console.log("times up")
                // score function here
            }
        }, 1000);
    }
    timer()
}


function submitAnswer() {
    correct.setAttribute('style', 'display: block');
    setTimeout(function(){getQuestion.setAttribute('style', 'display: none');}, 2000);
    setTimeout(function(){getScore.setAttribute('style', 'display: block');}, 2000);

    // store points
    // while or forEach (?) there are still questions in the array, go to the next question
    // then there's the do while loop (w3schools)
    // when no questions remain, go to enterInitials
}


function enterInitials() {
    // display score
    // request input of initials
}


function highScores() {
    // post initials on highscores list. see W4A8 for shopping list
    // try again  (go back to intro) and/or clear scores (remove list)
}


const questions = [
    {
        question: 'What is the smallest part of an element that retains the properties of that element?',
        answerA: 'proton',
        answerB: 'nucleus', 
        answerC: 'atom',
        answerD: 'molecule',
        correct: "C",
    },
    {
        question: 'Which two particles make up the nucleus of an atom?',
        answerA: 'proton and neutron',
        answerB: 'boson and megatron', 
        answerC: 'boson and megatron',
        answerD: 'positron and negatron',
        correct: "A",
    },
    {
        question: 'Which particle is linked to the identity of an atom of an element?',
        answerA: 'nucleus',
        answerB: 'proton', 
        answerC: 'electron',
        answerD: 'molecule',
        correct: "B",
    },
    {
        question: 'Which particle is responsible for the chemical properties of an element?',
        answerA: 'nucleus',
        answerB: 'proton', 
        answerC: 'electron',
        answerD: 'molecule',
        correct: "C",
    },
]
console.log(questions)