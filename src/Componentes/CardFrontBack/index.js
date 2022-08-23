import CardGame from "../CardGame"
import"./style.css"

function cardFrontBack () {
    return /*html*/`
    <article class = "card-front-back">
        ${CardGame()}
        ${CardGame("javascript", "logo do javascript")}
        ${CardGame("css", "logo do css")}

    </article>
    `
}

export default cardFrontBack;