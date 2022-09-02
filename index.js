const sectionElement = document.querySelector('.memory-game');

const carCards = [{
    brand: "audi",
    image: "assets/image/audi.png",
}, {
    brand: "infinity",
    image: "assets/image/infinity.png",
}, {
    brand: "lambo",
    image: "assets/image/lambo.png",
}, {
    brand: "ferrari",
    image: "assets/image/ferrari.png",
}, {
    brand: "lexus",
    image: "assets/image/lexus.png",
}, {
    brand: "maserati",
    image: "assets/image/maserati.png",
}, {
    brand: "bentley",
    image: "assets/image/bentley.png",
}, {
    brand: "porsche",
    image: "assets/image/porsche.png",
}];

let sortedCards = [];
const countOfCards = 16;

function mixCards() {
    const duplicateCards = [...carCards, ...carCards];
    sortedCards = duplicateCards.sort(function () {
        return 0.5 - Math.random()
    });
};

mixCards();

sortedCards.forEach(car =>
    createCardElement(car)
);

function createCardElement(car) {
    return sectionElement.insertAdjacentHTML('beforeend', `
    <div class="card" data-card-brand=${car.brand}>
        <img src="assets/image/front-bg-flipper.jpeg" alt="car" class="card_front">
        <img src=${car.image} alt=${car.brand} class="card_back">
    </div>`
    )
};
/*
const sectionContentElement = document.querySelectorAll('.card');

let hasFlipped = false;
let lock = false;
let firstCard, secondCard;

function flipCard() {
    if (lock) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlipped) {
        hasFlipped = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkMatchCards();

    const turnedCards = document.querySelectorAll(".flip");

    if (turnedCards.length === countOfCards) {
        restartGame();
    }
};

function disableDuplicateCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetChosenCards();
};

function flipCardBack() {
    lock = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetChosenCards();
    }, 800);
};

function checkMatchCards() {
    firstCard.dataset.cardBrand === secondCard.dataset.cardBrand ? disableDuplicateCards() : flipCardBack();
};

function resetChosenCards() {
    hasFlipped = false;
    lock = false;
    firstCard = null;
    secondCard = null;
};

function restartGame() {
    sectionContentElement.forEach(card => {
        card.classList.remove('flip');
        startGame();
    })
};

function startGame() {
    sectionContentElement.forEach(card => card.addEventListener('click', flipCard));
};
function showModalWindowStartGame() {
const parentElement = document.querySelector('.wrapper');
parentElement.insertAdjacentHTML('afterbegin', `<div class="modal"></div>`)
}
//showModalWindowStartGame()
//startGame();*/


////////////////NEW///////////////////----------------------////////////////
let first, second;
let lock = false;
let clickedCardsArray = [];

const eventClick = sectionElement.addEventListener("click", ({ target }) => {
    flipCard(target.closest('.card'));

    clickedCardsArray.push(target.closest('.card'))

    first = clickedCardsArray[0];
    second = clickedCardsArray[1];

    if (clickedCardsArray.length == 2) {
        matchCards();
    };
});

function flipCard(clickedElement) {
    if (lock) return;
    clickedElement.classList.add('flip');
};

function matchCards() {
    first.dataset.cardBrand === second.dataset.cardBrand ? disableDuplicateCards() : flipCardBack();
};

function flipCardBack() {
    lock = true;
    setTimeout(() => {
        first.classList.remove('flip');
        second.classList.remove('flip');
        lock = false;
        clickedCardsArray = [];
    }, 800);
}

function disableDuplicateCards() {
    first.removeEventListener('click', eventClick);
    second.removeEventListener('click', eventClick);
    clickedCardsArray = [];
};

/*
function showModalWindowStartGame() {
    const parentElement = document.querySelector('.wrapper');
    parentElement.insertAdjacentHTML('afterbegin', `<div class="modal"></div>`)
}*/
//showModalWindowStartGame()
//startGame();

