import CardGame from "../CardGame"
import"./style.css"

function cardFrontBack () {
    window.cardFrontBack = {};//nameSpac
    window.cardFrontBack.handleClick = (event) => {// toda essa parte do código é um evento de click
        const $origin = event.target;
        const $cardFrontBack = $origin.closest('.card-front-back');//preciso entender isso melhor. Voltar aqui depois!

        /*if ($cardFrontBack.classList.contains('-active')) {
            
            $cardFrontBack.classList.remove('-active');

        } else {
            $cardFrontBack.classList.add("-active");
        }*/

        $cardFrontBack.classList.toggle('-active');
    }
    
    return /*html*/`
    <article class = "card-front-back" onclick="cardFrontBack.handleClick(event)">
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