const username = document.getElementById("username");
const finalScore =document.getElementById("finalScore");
const saveScorebtn = document.getElementById('saveScorebtn')
const mostRecentScore = localStorage.getItem('score');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORE = 5;
//******************************Highscores*********************** */

finalScore.innerHTML = mostRecentScore;

username.addEventListener("keyup", function(){
    saveScorebtn.disable = !username.value;
});



saveHighScore = e =>{
    e.preventDefault();
  
    const score ={
      score: mostRecentScore,
      name: username.value,
    };
    highScores.push(score);
    highScores.sort( (a,b)=>b.score -a.score);
    highScores.splice(5);
  
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign("./highscore.html");
  }
