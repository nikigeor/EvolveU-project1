const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const yourScore = document.getElementById('yourScore');
yourScore.innerText = mostRecentScore;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveYourScore = (e) => {
    console.log("it worked!");
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 14),
        name: username.value
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(10);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("/");
    console.log(highScores);
}; 
