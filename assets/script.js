// // click the start button to begin quiz
// $("#start").click(function() {
//   $("#begin-quiz").addClass("hide");
//   $("#questions").removeClass("hide");
//   getQuestion();
// })

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

const startBox = document.getElementById("begin-quiz");
const questionBox = document.getElementById("questions");
const initialsBox = document.getElementById("all-done")
const highScoresBox = document.getElementById("highscores")


// returns the id of the button clicked
const btns = document.querySelectorAll('button')

btns.forEach(function(btn) {
  btn.addEventListener('click', btnClick)
})

function btnClick(e) {
  let button = (e.target.getAttribute('id'))
  
  if (button === 'start') {
    startBox.setAttribute("class", "hide");
    questionBox.setAttribute("class", "show");
    renderQuestion();  

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


// renders question and answer choices to screen
const getQuestionText = document.getElementById('question-text');
const answer1 = document.getElementById('A');
const answer2 = document.getElementById('B');
const answer3 = document.getElementById('C');
const answer4 = document.getElementById('D');

// Variables to use in the loop to select new questions.
const lastQuestion = questionBank.length;
let currentQuestion = 0;
let correctAnswer = questionBank[currentQuestion].correct;

const answerA = questionBank[1];
const answerB = questionBank[2];
const answerC = questionBank[3];
const answerD = questionBank[4];


let renderQuestion = function() {

  getQuestionText.textContent = questionBank[currentQuestion].question;
  answer1.innerText = questionBank[currentQuestion].answerA;
  answer2.innerText = questionBank[currentQuestion].answerB;
  answer3.innerText = questionBank[currentQuestion].answerC;
  answer4.innerText = questionBank[currentQuestion].answerD;
}

const answerBtns = document.querySelectorAll('.answers')

answerBtns.forEach(function(ans) {
  ans.addEventListener('click', checkAnswer)
})

const answerCorrect = document.getElementById("correct");

function checkAnswer(e) {
  console.log(currentQuestion)

  let answer = (e.target.getAttribute('id'))

  if (answer !== correctAnswer) {
    answerCorrect.setAttribute('class', 'show');
    answerCorrect.textContent= "Incorrect.";
  // run score funtion}
    setTimeout(function() {
    answerCorrect.setAttribute('class', 'hide');
    }, 2000);
  
    } else {
    answerCorrect.setAttribute('class', 'show');
    answerCorrect.textContent= "Correct!";
    // update score

    setTimeout(function() {
    answerCorrect.setAttribute('class', 'hide');
    }, 2000);
  }

  currentQuestion++;

  if (currentQuestion < lastQuestion) {
    console.log(currentQuestion);
    renderQuestion(currentQuestion);
  } else {
    questionBox.setAttribute("class", "hide");
    initialsBox.setAttribute("class", "show");
  }
}
