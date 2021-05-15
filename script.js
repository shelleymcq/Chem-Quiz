const startBtn = document.getElementById('start');

const getQuestionText = document.getElementById('question-text');
const answerA = document.getElementById('A');
const answerB = document.getElementById('B');
const answerC = document.getElementById('C');
const answerD = document.getElementById('D');


const begin = document.getElementById('intro');
const getQuestion = document.getElementById('question');
const correct = document.getElementById('response');
const getScore = document.getElementById('all-done');
const submitInitials = document.getElementById('input-initials');
const submitBtn = document.getElementById('submit');
const startTimer = document.getElementById('timer');


startBtn.addEventListener('click', startQuiz);
answerA.addEventListener('click', checkAnswer);
answerB.addEventListener('click', checkAnswer);
answerC.addEventListener('click', checkAnswer);
answerD.addEventListener('click', checkAnswer);
submitBtn.addEventListener('click', enterInitials);

const questionBank = [
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

//.textContent replaced content in the header question and .innerText replaced content in the answer buttons
function showQuestion () {
    let questions = questionBank[0];
    getQuestionText.textContent = questions.question;
    answerA.innerText += questions.answerA;
    answerB.innerText += questions.answerB;
    answerC.innerText += questions.answerC;
    answerD.innerText += questions.answerD;
}

showQuestion()
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



function checkAnswer() {
    if (answerBtn === questionBank[0][4]) {
        console.log("yippee");
    } else{
        console.log('try again');
    }
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

//check for correct answer


function enterInitials() {
    // display score
    // request input of initials
}


function highScores() {
    // post initials on highscores list. see W4A8 for shopping list
    // try again  (go back to intro) and/or clear scores (remove list)
}


