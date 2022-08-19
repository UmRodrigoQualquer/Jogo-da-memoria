import CardGame from "../../compomentes/CardGame";
function BoardGame(amountCards) {
    const $htmlCardGamer = CardGame();
    const $htmlBoardGame = $htmlCardGamer.repeat(amountCards);

    console.log($htmlBoardGame);
    
    
    return $htmlBoardGame;
    
}

export default BoardGame;