const startBtn = document.getElementById('start');
const answerBtn = document.getElementById('answer-button1');


startBtn.addEventListener('click', startQuiz);
answerBtn.addEventListener('click', submitAnswer);





//functions needed??

function startQuiz() {
    console.log("quiz started");
}


function submitAnswer() {
    console.log("answer clicked");
}


function nextQuestion() {

}


function enterInitials() {

}


const questions = [
    {
        question: 'Which two particles make up the nucleus of an atom?',
        answers: [
            {answer: 'proton and neutron', correct: true},
            {answer: 'boson and megatron', correct: false},
            {answer: 'alpha and beta', correct: false},
            {answer: 'positron and negatron', correct: false},
        ]
    }
]