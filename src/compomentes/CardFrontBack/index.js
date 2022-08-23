import CardGame from "../CardGame"

function cardFrontBack () {
    return /*html*/`
    <article class = "card-front-back">
        ${CardGame()}
        ${CardGame()}

    </article>
    `
}

export default cardFrontBack;