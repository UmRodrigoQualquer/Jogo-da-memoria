import "./style.css";
import CardGame from "../../compomentes/CardGame";
function BoardGame(amountCards) {
    const $htmlCardGamer = CardGame();
    const $htmlBoardGame = $htmlCardGamer.repeat(amountCards);
    
    
    return `
    <section class = "board-game">
    ${$htmlBoardGame}</section>`;
    
}

export default BoardGame;