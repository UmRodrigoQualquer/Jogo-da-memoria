import CardGame from "../CardGame"
import"./style.css"

function cardFrontBack () {
    return /*html*/`
    <article class = "card-front-back">
        <div class="card -front">
        ${CardGame()}
        </div>
        
        <div class="card -back">
        ${CardGame("javascript", "logo do javascript")}
        </div>

    </article>
    `
}

export default cardFrontBack;