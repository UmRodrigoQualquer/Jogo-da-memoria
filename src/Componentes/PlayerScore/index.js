import"./style.css";
function playerScore (points = 0) {
    return/*html*/`
    <section class ="player-score">
        <div class = "pointer -a${points}"></div>
        <div class = "pointer -b${points}"></div>
        <div class = "pointer -c${points}"></div>    
    </section>    
    `;
} 

export default playerScore;