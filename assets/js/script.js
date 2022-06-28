var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");



var buttonListEl = $('#buttons');



var numBlanks = 0;
var score = 0;
var isWin = false;
var timer;
var timerCount;


var questions =[
  "What movie features star actors Chevy Chase and Bill Murry, where they only have 1 scene together?",
  "What movie was taken place in the Overlook Hotel?",
  "What was the product that Vince Vaughn and Owen Wilson were trying to sell in the beginning of the movie The Internship?",
  "What instrument does Genn Belcher from Bob's Burgers carry around?"
];

var answers = [
  question1={
    answerOptions: ["GhostBusters","Vacation", "Caddyshack", "Stripes"],
    correctAnswer: 2
  },
  question2={
    answerOptions: ["Hotel Transylvania","The Resort", "Grand Hotel", "The Shining"],
    correctAnswer: 3
  },
  question3={
    answerOptions: ["Watch","Scooter", "Pizza", "Software"],
    correctAnswer: 0
  },
  question4={
    answerOptions: ["Guitar","Keyboard", "Straw", "Harmonica"],
    correctAnswer: 1
  },
];

var questionCounter = 0;

// The init function is called when the page loads 
function init() {
  getWins();
}

// The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;
  timerCount = 120;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;

  getQuestion(questionCounter);
  getAnswers(questionCounter);

  startTimer();
}

// The endGame function is called when the win condition is met
function endGame() {
  questionCounter=0;
  startButton.disabled=false;
  setScore();
  window.location.assign("./end.html");
}


// The setTimer function starts and stops the timer and triggers endGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        startButton.disabled=false;
        endGame();
      }
    }
    // Tests if time has run out
    if (timerCount <= 0) {
      // Clears interval
      timerCount = 0;
      clearInterval(timer);
      startButton.disabled=false;
      endGame();
    }
  }, 1000);
}


// Updates win count on screen and sets win count to client storage
function setScore() {
  win.textContent = timerCount;
  localStorage.setItem("score", timerCount);
}


// These functions are used by init
function getWins() {
  // Get stored value from client storage, if it exists
  var storedWins = localStorage.getItem("score");
  // If stored value doesn't exist, set counter to 0
  if (storedWins === null) {
    winCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    winCounter = storedWins;
  }
  //Render win count to page
  win.textContent = winCounter;
}


//This gets the next question in the array
function nextQuestion(){
  if(questionCounter<4){
    getQuestion(questionCounter);
    //getAnswers(questionCounter);
    getAnswers(questionCounter);
  }else{
    clearInterval(timer);
    endGame();
    return;
  }
  
}


// Gets the question that will be presented to the screen after start is hit
function getQuestion(numberOfQuestion){
  var chosenQuestion = questions[numberOfQuestion];
  wordBlank.textContent = chosenQuestion;
}

//This gets the associated answers for the that question
function getAnswers(numberOfQuestion){
  var questionNumber = answers[numberOfQuestion];

  for(var i = 0; i<4; i++){
    var answerButton = $('<button>');
     answerButton.addClass('btn');
     answerButton.attr("attributeName", "buttonEl");
    if(questionNumber.correctAnswer === i){
      // Setting answer value to true
      answerButton.attr('data-letter', "t");
    }else {
      answerButton.attr('data-letter', "f");
    }
    answerButton.text(questionNumber.answerOptions[i]);
    buttonListEl.append(answerButton);
  }
  questionCounter++;
}

//This removes the answer buttons that were created from the screen
function removeAnswerButtons(){
  var elem = document.getElementById("buttons");
  while(elem.hasChildNodes()){
    elem.removeChild(elem.firstChild);
  }
}

//This adds a click listener whenever a button is clicked

buttonListEl.on('click', '.btn', function(event){

var buttonValue = $(event.target).attr('data-letter');

  if(buttonValue==="f"){
    if(timerCount <= 11){
      timerCount=0;
    }else{
      timerCount = timerCount-10;
    }
    timerElement.textContent = timerCount;
  }else{
    removeAnswerButtons();
    nextQuestion();
  }

 
});

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts
  timerCount = 0;
  // Renders win and loss counts and sets them into client storage
  setScore()
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);



