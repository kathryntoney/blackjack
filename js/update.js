let cardDeck = [];
let cardSuits = {
    D: 'diamonds',
    S: 'spades',
    H: 'hearts',
    C: 'clubs'
}

const multipleDecks = () => { // setting up the game to be played with three full decks
    for (let numOfDecks = 0; numOfDecks < 3; numOfDecks++) {
        cardDeck.concat(...buildDeck())
    }
    shuffle(cardDeck);
    console.log(cardDeck);
    console.log(cardDeck.length);
}

const buildDeck = () => { // setting up 13 cards of each suit
    let deck = [];
    for (let suit in cardSuits) {
        for (let points = 1; points <= 13; points++) {
            deck.push(createCardObj(points, suit))
        }
        return shuffle(deck);
    }
}

const createCardObj = (points, suit) => {
    let card = {
        points: points,
        suit: suit
    }

    let imgURL = "";

    if (points > 1 && points <= 10) {
        imgURL = `images/${points}_of_${cardSuits[suit]}.png`
    }

    switch (points) {
        case 11:
            card.points = 10;
            imgURL = `images/jack_of_${cardSuits[suit]}.png`
            break;
        case 12:
            card.points = 10;
            imgURL = `images/queen_of_${cardSuits[suit]}.png`
            break;
        case 13:
            card.points = 10;
            imgURL = `images/king_of_${cardSuits[suit]}.png`
            break;
        case 1:
            card.points = 11;
            imgURL = `images/ace_of_${cardSuits[suit]}.png`
            break;
    }

    card.imgURL = imgURL;
    return card;

}

function shuffle(deck) {
    let count = deck.length;
    while (count) {
        deck.push(deck.splice(Math.floor(Math.random() * count), 1)[0]);
        count -= 1;
    }
}

console.log(cardDeck);

// class Card {
//     constructor(face, suit, value, img) {
//         this.face = face;
//         this.suit = suit;
//         this.value = value;
//         this.img = img;
//     }

// }