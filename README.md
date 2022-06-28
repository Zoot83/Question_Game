# Question_Gmae

Question Quessing Game  

In this project I created a multiple choice guessing game. It has 4 possible answers for each of the questions. 
IF you do not get the correct answer you are deducted 10 seconds from the timer and will not move onto the next question until you 
asnwer the question correctly. Your score will be the remaining time that is left in the timer. 

In this project I used local stoarge to save past highscores and compare them to see who has the current highscore.
If the High score was the best it would put it at the top and it will push the scores that are in there down one. When 
loggin the high score I ask the user to put a username in so that the high score board shows both the score and the user
that had the high score.

I also included multiple buttons throughout the code that allow you to traverse the website and clear current high scores.
If the home button is selected from the highscores page it will take the user back to where the start button will be to start the 
game again.

You can also select the high scores button from the home screen to go to the current high scores that are held. 
## Authors

- [@marshallrizzuto](https://github.com/Zoot83)

Website: https://github.com/Zoot83/Question_Game
## Features

- Javascript
- object creation
- Controlling Object variables
- Storing and referring to values
- Understanding Functions
- Function returned values
- Local storage
- Query Selectors
- Arrays
- JSON
- Stringify



## Demo




## Usage/Examples

  I have included examples of code that will show how my code does specific calls to functions and variables with local storage values. 
  This is the function that will save the high scores with the user entering a username that will be associated with the score. 


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
```

This next section will demonsrate how the user can see the high scores that are currently saved to the local storage. 

const highScoreList = document.getElementById('highScoreList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
var clearBtn = document.querySelector('.clear-Scores');

highScores.forEach(scoreObj => {
    const listItem = document.createElement('li');
    listItem.innerText = `${scoreObj.name} - ${scoreObj.score}`;
    listItem.classList.add('high-score');
    highScoreList.appendChild(listItem);
   })

clearBtn.addEventListener("click", function (){
    localStorage.clear();
    highScoreList.remove('li');
});
