import "./src/styles/settings/colors.css";// Aqui to importando para o js as cores que o css gera.
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import BoardGame from "./src/Objects/BoardGame";
import ScoreBoard from "./src/Objects/ScoreBoard";


const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);


$root.insertAdjacentHTML(
    "afterbegin",`
        ${ScoreBoard()} 
        ${ BoardGame(6)}
       ` 
        );