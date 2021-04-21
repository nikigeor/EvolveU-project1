const topTenList = document.getElementById("topTenList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

topTenList.innerHTML = highScores
.map(score => {
    return `<li class="high-score">${score.name}-${score.score}</li>`;
})
.join("");