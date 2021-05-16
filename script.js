const startBtn = document.getElementById('start');

const getQuestionText = document.getElementById('question-text');
const answer1 = document.getElementById('1');
const answer2 = document.getElementById('2');
const answer3 = document.getElementById('3');
const answer4 = document.getElementById('4');


const begin = document.getElementById('intro');
const getQuestion = document.getElementById('question');
const startTimer = document.getElementById('timer');
const correct = document.getElementById('response');
const getScore = document.getElementById('all-done');
const getInitials = document.getElementById('initials');
const submitBtn = document.getElementById('submit');
const afterInitials = document.getElementById('input-initials')
const getScores = document.getElementById('high-scores')


startBtn.addEventListener('click', startQuiz);
answer1.addEventListener('click', submitAnswer);
answer2.addEventListener('click', submitAnswer);
answer3.addEventListener('click', submitAnswer);
answer4.addEventListener('click', submitAnswer);

submitBtn.addEventListener('click', enterInitials);

// Question bank of objects to use for quiz questions.
const questionBank = [
    {
        question: 'What is the smallest part of an element that retains the properties of that element?',
        answer1: 'proton',
        answer2: 'nucleus', 
        answer3: 'atom',
        answer4: 'molecule',
        correct: 3
    },
    {
        question: 'Which two particles make up the nucleus of an atom?',
        answer1: 'proton and neutron',
        answer2: 'boson and megatron', 
        answer3: 'boson and megatron',
        answer4: 'positron and negatron',
        correct: 1
    },
    {
        question: 'Which particle is linked to the identity of an atom of an element?',
        answer1: 'nucleus',
        answer2: 'proton', 
        answer3: 'electron',
        answer4: 'molecule',
        correct: 2
    },
    {
        question: 'Which particle is responsible for the chemical properties of an element?',
        answer1: 'nucleus',
        answer2: 'proton', 
        answer3: 'electron',
        answer4: 'molecule',
        correct: 3
    },
]

// Variables to use in the loop to select new questions.

const lastQuestion = questionBank.length - 1;
let currentQuestion = 0;
let questions = questionBank[currentQuestion];
let correctAnswer = questionBank[currentQuestion][5];

//.textContent replaces content in the header question and .innerText appends content in the answer buttons
let showQuestion = function () {

    getQuestionText.textContent = questions.question;
    answer1.innerText += questions.answer1;
    answer2.innerText += questions.answer2;
    answer3.innerText += questions.answer3;
    answer4.innerText += questions.answer4;
}

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

function startQuiz() {
    begin.setAttribute('style', 'display: none');
    getQuestion.setAttribute('style', 'display: block')
    showQuestion()
    timer()
}

// I cannot figure out how to compare the answer selected with the correct answer from the question object. Every new thing I try seems to get further from what I need it to do.

function submitAnswer() {
    const btns = document.querySelectorAll('button')
    btns.forEach(function(btn) {
        btn.addEventListener('click', btnClick)
    })
    function btnClick(e) {
        console.log(e.target.getAttribute('data-value'))
    }
    correct.setAttribute('style', 'display: block');
    setTimeout(function(){getQuestion.setAttribute('style', 'display: none');}, 2000);
    setTimeout(function(){getScore.setAttribute('style', 'display: block');}, 2000);

}
// Ran out of time before I could complete these functions.

function enterInitials() {
    // display score
    // user inputs initials
    afterInitials.setAttribute('style', 'display: none');
    getScores.setAttribute('style', 'display: block')


}


function highScores() {
    // post initials on highscores list
}


