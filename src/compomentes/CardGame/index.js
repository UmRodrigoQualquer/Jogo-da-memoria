import "./style.css";//esse import só é possível por causa da biblioteca que to usando.

function CardGame(icon ="alura-pixel" , alt ="logo da alura") {
    return /*html*/`
    <article class = "card-game">
        <img src="imagens/${icon}.png" alt=${alt}>
    </article>
    `;
}
    
export default CardGame;