import "./style.css";
import CardGame from "../../Compomentes/CardGame";

function BoardGame(amountCards) {
    const $htmlCardGamer = CardGame();
    const $htmlBoardGame = $htmlCardGamer.repeat(amountCards);
    
    
    return /*html*/`
    <section class = "board-game">
    ${$htmlBoardGame}</section>`;
    
}

export default BoardGame;