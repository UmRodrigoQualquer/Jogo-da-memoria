import "./style.css";
import cardFrontBack from "../../Componentes/CardFrontBack"

function BoardGame(amountCards) {
    const $htmlcardFrontBack = cardFrontBack();
    const $htmlBoardGame = $htmlcardFrontBack.repeat(amountCards);
    
    
    return /*html*/`
    <section class = "board-game">
    ${$htmlBoardGame}</section>`;
    
}

export default BoardGame;