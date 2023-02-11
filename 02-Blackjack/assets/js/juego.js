// C = Treboles
// D = Diamantes
// H = Corazones
// S = Spades

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
let puntosComputadora = 0;

// Referencias HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');
const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

// Crea una nueva baraja
const crearDeck = () => {

    for (let i = 2; i <= 10; i++) {
        for (const tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (const tipo of tipos) {
        for (const especial of especiales) {
            deck.push(especial + tipo);
        }
    }

    deck = _.shuffle(deck);
    return deck;
}

// Permite tomar carta
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay mas cartas';
    }

    const carta = deck.pop();

    return carta;
}

// Regresa valor de cada carta
const valorCarta = (carta) => {
    return (!isNaN(carta.substring(0, carta.length - 1))) ? carta.substring(0, carta.length - 1) * 1 :
        (carta.substring(0, carta.length - 1) === "A") ? 11 : 10;
}

const turnoComputadora = (puntosMinimos) => {

    do {

        const carta = pedirCarta();

        puntosComputadora += valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        // <!-- <img src="assets/cartas/10C.png" class="carta" alt="10C"> -->
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.className = 'carta';
        divCartasComputadora.append(imgCarta);

    } while (puntosComputadora < puntosMinimos);

}

crearDeck();

// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();

    puntosJugador += valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    // <!-- <img src="assets/cartas/10C.png" class="carta" alt="10C"> -->
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.className = 'carta';
    divCartasJugador.append(imgCarta);

    setTimeout(() => {
        if (puntosJugador > 21) {
            alert('Perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
        } else if (puntosJugador === 21) {
            alert('Ganaste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
        }
    }, 100);
});

btnDetener.addEventListener('click', () => {
    turnoComputadora(puntosJugador);
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    setTimeout(() => {
        if (puntosComputadora > 21) {
            alert('Jugador ha ganado');
        } else if (puntosComputadora > puntosJugador) {
            alert('Computador ha ganado');
        } else if (puntosComputadora === puntosJugador) {
            alert('Nadie gana');
        }

    }, 100);
});

btnNuevo.addEventListener('click', () => {

    crearDeck();
    puntosComputadora = 0;
    puntosJugador = 0;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;
    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';
    btnDetener.disabled = false;
    btnPedir.disabled = false;

});



