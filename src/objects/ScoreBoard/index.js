import PlayerName from "../../Componentes/PlayerName";
import "./style.css";
import vsPlayer from "../../Componentes/VsPlayer";
import playerScore from"../../Componentes/PlayerScore";

function ScoreBoard() {
  return /*html*/ `
    <header class="score-board">
      ${PlayerName("Player1")}
      ${playerScore(2)}
      ${vsPlayer()}
      ${playerScore(3)}
      ${PlayerName("Player2")}
    </header>
  `;
}

export default ScoreBoard;