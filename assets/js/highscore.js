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