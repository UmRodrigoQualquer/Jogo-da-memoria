import "./src/styles/settings/colors.css";// Aqui to importando para o js as cores que o css gera.
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import BoardGame from "./src/objects/BoardGame";
import PlayerName from "./src/compomentes/PlayerName";

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);
const $htmlPlayerName = PlayerName();

$root.insertAdjacentHTML(
    "afterbegin",`
        ${PlayerName("player1")}
        ${PlayerName("player2")}   
        ${ BoardGame(6)}
       ` 
        );