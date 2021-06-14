const startBox = document.getElementById("begin-quiz");
const questionBox = document.getElementById("questions");
const initialsBox = document.getElementById("all-done")
const highScoresBox = document.getElementById("highscores")


// this will return the id of the button clicked
const btns = document.querySelectorAll('button')

btns.forEach(function(btn) {
  btn.addEventListener('click', btnClick)
})

function btnClick(e) {
  let button = (e.target.getAttribute('id'))
  
  if (button === 'start') {
    startBox.setAttribute("class", "hide");
    questionBox.setAttribute("class", "show");
    nextQuestion();  

  } else if (button === 'submit-initials') {
    // run getScore function, post scores from local storage
    initialsBox.setAttribute("class", "hide");
    highScoresBox.setAttribute("class", "show");

  } else if (button === 'go-back') {
    highScoresBox.setAttribute("class", "hide");
    startBox.setAttribute("class", "show");
    // do not clear local storage
  } else if (button === 'clear-scores') {
    console.log('clear high scores');
    // clear local storage, remain on page
  }
}

// array of objects to use for quiz questions.
const questionBank = [
  {
      question: 'What is the smallest part of an element that retains the properties of that element?',
      answerA: ' proton',
      answerB: ' nucleus', 
      answerC: ' atom',
      answerD: ' molecule',
      correct: "C"
  },
  {
      question: 'Which two particles make up the nucleus of an atom?',
      answerA: 'proton and neutron',
      answerB: 'boson and megatron', 
      answerC: 'boson and megatron',
      answerD: 'positron and negatron',
      correct: "A"
  },
  {
      question: 'Which particle is linked to the identity of an atom of an element?',
      answerA: 'nucleus',
      answerB: 'proton', 
      answerC: 'electron',
      answerD: 'molecule',
      correct: "B"
  },
  {
      question: 'Which particle is responsible for the chemical properties of an element?',
      answerA: 'nucleus',
      answerB: 'proton', 
      answerC: 'electron',
      answerD: 'molecule',
      correct: "C"
  },
]

// renders question and answer choices to screen
const getQuestionText = document.getElementById('question-text');
const answer1 = document.getElementById('A');
const answer2 = document.getElementById('B');
const answer3 = document.getElementById('C');
const answer4 = document.getElementById('D');

// Variables to use in the loop to select new questions.
const lastQuestion = questionBank.length - 1;
let currentQuestion = 0;
let selectQuestion = questionBank[currentQuestion];
let correctAnswer = questionBank[currentQuestion].correct;

const answerA = questionBank[1];
const answerB = questionBank[2];
const answerC = questionBank[3];
const answerD = questionBank[4];


// check if last question has appeared and either run renderQquestion or end quiz and go to the score and initials screen
let nextQuestion = function() {
  if (currentQuestion > lastQuestion) {
    questionBox.setAttribute("class", "hide");
    initialsBox.setAttribute("class", "show");
    // run score funtion

  } else {
    renderQuestion()
  }
}

let renderQuestion = function() {
      getQuestionText.textContent = selectQuestion.question;
      answer1.innerText += selectQuestion.answerA;
      answer2.innerText += selectQuestion.answerB;
      answer3.innerText += selectQuestion.answerC;
      answer4.innerText += selectQuestion.answerD;
}

const answerBtns = document.querySelectorAll('.answers')

answerBtns.forEach(function(ans) {
  ans.addEventListener('click', checkAnswer)
})

const answerCorrect = document.getElementById("correct");

function checkAnswer(e) {
  let answer = (e.target.getAttribute('id'))
  
  if (answer === correctAnswer) {
    answerCorrect.setAttribute('class', 'show');
    // show for 2 seconds, then run nextQuestion
  } else {
    console.log("Incorrect");
    answerCorrect.setAttribute('class', 'show');
    answerCorrect.textContent= "Incorrect.";
    //show "incorrect" for 2 seconds, run nextQuestion
  }
}



