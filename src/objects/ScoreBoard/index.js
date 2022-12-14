import ArrowDown from "../../Componentes/ArrowDown";
import PlayerName from "../../Componentes/PlayerName";
import "./style.css";
import vsPlayer from "../../Componentes/VsPlayer";
import playerScore from"../../Componentes/PlayerScore";


function ScoreBoard() {
  return /*html*/ `
    <header class="score-board">
      ${ArrowDown(2)}
      ${PlayerName("Player1")}
      ${playerScore(1)}
      ${vsPlayer()}
      ${playerScore(2)}
      ${PlayerName("Player2")}
    </header>
  `;
}

export default ScoreBoard;