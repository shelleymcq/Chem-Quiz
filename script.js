const startBtn = document.getElementById('start');
const answerBtn = document.getElementById('answer-button1');
const begin = document.getElementById('intro');
const getQuestion = document.getElementById('question');
const correct = document.getElementById('response');



startBtn.addEventListener('click', startQuiz);
answerBtn.addEventListener('click', submitAnswer);




function startQuiz() {
    begin.setAttribute('style', 'display: none');
    getQuestion.setAttribute('style', 'display: block')

}


function submitAnswer() {
    correct.setAttribute('style', 'display: block');
    // store points
    // while (?) there are still questions in the array, go to the next question
    // when no questions remain, go to enterInitials
}


function enterInitials() {
    // display score
    // request input of initials
}


function highScores() {
    // post initials on highscores list
    // play again  (go back to intro) or clear scores (remove list)
}


const questions = [
    {
        question: 'What is the smallest part of an element that retains the properties of that element?',
        answers: [
            {answer: 'proton', correct: false},
            {answer: 'nucleus', correct: false},
            {answer: 'atom', correct: false},
            {answer: 'molecule', correct: true},
        ]
    },
    {
        question: 'Which two particles make up the nucleus of an atom?',
        answers: [
            {answer: 'proton and neutron', correct: true},
            {answer: 'boson and megatron', correct: false},
            {answer: 'alpha and beta', correct: false},
            {answer: 'positron and negatron', correct: false},
        ]
    },
    {
        question: 'Which particle is linked to the identity of an atom of an element?',
        answers: [
            {answer: 'nucleus', correct: false},
            {answer: 'proton', correct: true},
            {answer: 'electron', correct: false},
            {answer: 'molecule', correct: false},
        ]
    },
    {
        question: 'Which particle is responsible for the chemical properties of an element?',
        answers: [
            {answer: 'nucleus', correct: false},
            {answer: 'proton', correct: false},
            {answer: 'electron', correct: true},
            {answer: 'molecule', correct: false},
        ]
    },
]
console.log(questions)