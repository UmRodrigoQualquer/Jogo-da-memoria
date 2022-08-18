import "./src/styles/settings/colors.css";// Aqui to importando para o js as cores que o css gera.
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import CardGame from "./src/compomentes/CardGame";//O ponto e barra é o comando para o programa buscar.

const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame);