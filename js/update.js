function initializeGame() {
    playerHasAce = false;
    dealerHasAce = false;
    messageDisplay.textContent = "";
    playerDisplay.textContent = 'Player:';
    dealerDisplay.textContent = 'Dealer:';
    dealer.currentScore = 0;
    dealer.dealerScore = 0;
    dealer.hand = [];
    player.currentScore = 0;
    dealer.hand = [];
    playerCardsInPlay.innerHTML = "";
    dealerCardsInPlay.innerHTML = "";
    dealerFlop.innerHTML = "";
    currentCard = dealCard(deck1);
    player.dealPlayerCard();
    playerDisplay.textContent = `Player: ${player.currentScore}`
    currentCard = dealCard(deck1)
    dealer.dealDealerCard();
    dealerDisplay.textContent = `Dealer: ${dealer.currentScore}`
    currentCard = dealCard(deck1)
    player.dealPlayerCard();
    playerDisplay.textContent = `Player: ${player.currentScore}`
    currentCard = dealCard(deck1)
    dealer.hand.push(currentCard)
    dealer.dealerScore += currentCard.points;
    dealerDisplay.textContent = `Dealer: ${dealer.currentScore}`
    console.log(dealer.dealerScore)
    dealButton.disabled = true;
    hitButton.disabled = false;
    standButton.disabled = false;
}

function checkScores () {
    if (player.currentScore === 21 && dealer.dealerScore !== 21) {
        dealerDisplay.textContent = `Dealer: ${dealer.dealerScore}`
        messageDisplay.textContent = 'BLACKJACK!!! Click deal to play again'
        hitButton.disabled = true;
        standButton.disabled = true;
        player.playerWins();
        playerWinCount += 1;
        winCount.textContent = `Player Wins: ${playerWinCount} / Dealer Wins: ${dealerWinCount}`;
    }
    if (dealer.dealerScore === 21 && player.currentScore !== 21) {
        dealerDisplay.textContent = `Dealer: ${dealer.dealerScore}`
        dealerCard = document.createElement('img')
        dealerCard.setAttribute('class', 'card')
        dealerCard.setAttribute('id', 'dealerCard')
        dealerCard.setAttribute('src', currentCard.img)
        dealerCardsInPlay.append(dealerCard)
        messageDisplay.textContent = 'House wins - click deal to play again'
        hitButton.disabled = true;
        standButton.disabled = true;
        dealer.dealerWins();
        dealerWinCount += 1;
        winCount.textContent = `Player Wins: ${playerWinCount} / Dealer Wins: ${dealerWinCount}`;
    }
    if (dealer.dealerScore === 21 && player.currentScore === 21) {
        // dealerCard = document.createElement('img')
        // dealerCard.setAttribute('class', 'card')
        // dealerCard.setAttribute('id', 'dealerCard')
        // dealerCard.setAttribute('src', currentCard.img)
        // dealerCardsInPlay.append(dealerCard)
        // messageDisplay.textContent = 'PUSH - click deal to play again'
        // hitButton.disabled = true;
        // standButton.disabled = true;
        // playerDisplay.setAttribute('class', 'result-lose')
        // dealerDisplay.setAttribute('class', 'result-lose')
    }
    if (player.currentScore > 21) {
        // messageDisplay.textContent = 'Player Busts - click deal to play again'
        // hitButton.disabled = true;
        // standButton.disabled = true;
        // dealerDisplay.textContent = `Dealer: ${dealer.dealerScore}`
        // let dealerCard = document.createElement('img')
        // dealerCard.setAttribute('class', 'card')
        // dealerCard.setAttribute('id', 'dealerCard')
        // currentCard = dealer.hand[1]
        // dealerCard.setAttribute('src', currentCard.img)
        // dealerCardsInPlay.append(dealerCard)
        // dealer.dealerWins();
        // dealerWinCount += 1;
        // winCount.textContent = `Player Wins: ${playerWinCount} / Dealer Wins: ${dealerWinCount}`
    }
    if (dealer.dealerScore > 21) {
        // messageDisplay.textContent = 'House Busts, Player Wins - click deal to play again'
        // hitButton.disabled = true;
        // standButton.disabled = true;
        // dealerDisplay.textContent = `Dealer: ${dealer.dealerScore}`
        // let dealerCard = document.createElement('img')
        // dealerCard.setAttribute('class', 'card')
        // dealerCard.setAttribute('id', 'dealerCard')
        // currentCard = dealer.hand[1]
        // dealerCard.setAttribute('src', currentCard.img)
        // dealerCardsInPlay.append(dealerCard)
        // player.playerWins();
        // playerWinCount += 1;
        winCount.textContent = `Player Wins: ${playerWinCount} / Dealer Wins: ${dealerWinCount}`
    }
}

















const deck1 = [
    { suit: 'hearts', rank: '2', points: 2, img: 'images/2_of_hearts.png' },
    { suit: 'hearts', rank: '3', points: 3, img: 'images/3_of_hearts.png' },
    { suit: 'hearts', rank: '4', points: 4, img: 'images/4_of_hearts.png' },
    { suit: 'hearts', rank: '5', points: 5, img: 'images/5_of_hearts.png' },
    { suit: 'hearts', rank: '6', points: 6, img: 'images/6_of_hearts.png' },
    { suit: 'hearts', rank: '7', points: 7, img: 'images/7_of_hearts.png' },
    { suit: 'hearts', rank: '8', points: 8, img: 'images/8_of_hearts.png' },
    { suit: 'hearts', rank: '9', points: 9, img: 'images/9_of_hearts.png' },
    { suit: 'hearts', rank: '10', points: 10, img: 'images/10_of_hearts.png' },
    { suit: 'hearts', rank: 'jack', points: 10, img: 'images/jack_of_hearts.png' },
    { suit: 'hearts', rank: 'queen', points: 10, img: 'images/queen_of_hearts.png' },
    { suit: 'hearts', rank: 'king', points: 10, img: 'images/king_of_hearts.png' },
    { suit: 'hearts', rank: 'ace', points: 11, img: 'images/ace_of_hearts.png' },
    { suit: 'spades', rank: '2', points: 2, img: 'images/2_of_spades.png' },
    { suit: 'spades', rank: '3', points: 3, img: 'images/3_of_spades.png' },
    { suit: 'spades', rank: '4', points: 4, img: 'images/4_of_spades.png' },
    { suit: 'spades', rank: '5', points: 5, img: 'images/5_of_spades.png' },
    { suit: 'spades', rank: '6', points: 6, img: 'images/6_of_spades.png' },
    { suit: 'spades', rank: '7', points: 7, img: 'images/7_of_spades.png' },
    { suit: 'spades', rank: '8', points: 8, img: 'images/8_of_spades.png' },
    { suit: 'spades', rank: '9', points: 9, img: 'images/9_of_spades.png' },
    { suit: 'spades', rank: '10', points: 10, img: 'images/10_of_spades.png' },
    { suit: 'spades', rank: 'jack', points: 10, img: 'images/jack_of_spades.png' },
    { suit: 'spades', rank: 'queen', points: 10, img: 'images/queen_of_spades.png' },
    { suit: 'spades', rank: 'king', points: 10, img: 'images/king_of_spades.png' },
    { suit: 'spades', rank: 'ace', points: 11, img: 'images/ace_of_spades.png' },
    { suit: 'diamonds', rank: '2', points: 2, img: 'images/2_of_diamonds.png' },
    { suit: 'diamonds', rank: '3', points: 3, img: 'images/3_of_diamonds.png' },
    { suit: 'diamonds', rank: '4', points: 4, img: 'images/4_of_diamonds.png' },
    { suit: 'diamonds', rank: '5', points: 5, img: 'images/5_of_diamonds.png' },
    { suit: 'diamonds', rank: '6', points: 6, img: 'images/6_of_diamonds.png' },
    { suit: 'diamonds', rank: '7', points: 7, img: 'images/7_of_diamonds.png' },
    { suit: 'diamonds', rank: '8', points: 8, img: 'images/8_of_diamonds.png' },
    { suit: 'diamonds', rank: '9', points: 9, img: 'images/9_of_diamonds.png' },
    { suit: 'diamonds', rank: '10', points: 10, img: 'images/10_of_diamonds.png' },
    { suit: 'diamonds', rank: 'jack', points: 10, img: 'images/jack_of_diamonds.png' },
    { suit: 'diamonds', rank: 'queen', points: 10, img: 'images/queen_of_diamonds.png' },
    { suit: 'diamonds', rank: 'king', points: 10, img: 'images/king_of_diamonds.png' },
    { suit: 'diamonds', rank: 'ace', points: 11, img: 'images/ace_of_diamonds.png' },
    { suit: 'clubs', rank: '2', points: 2, img: 'images/2_of_clubs.png' },
    { suit: 'clubs', rank: '3', points: 3, img: 'images/3_of_clubs.png' },
    { suit: 'clubs', rank: '4', points: 4, img: 'images/4_of_clubs.png' },
    { suit: 'clubs', rank: '5', points: 5, img: 'images/5_of_clubs.png' },
    { suit: 'clubs', rank: '6', points: 6, img: 'images/6_of_clubs.png' },
    { suit: 'clubs', rank: '7', points: 7, img: 'images/7_of_clubs.png' },
    { suit: 'clubs', rank: '8', points: 8, img: 'images/8_of_clubs.png' },
    { suit: 'clubs', rank: '9', points: 9, img: 'images/9_of_clubs.png' },
    { suit: 'clubs', rank: '10', points: 10, img: 'images/10_of_clubs.png' },
    { suit: 'clubs', rank: 'jack', points: 10, img: 'images/jack_of_clubs.png' },
    { suit: 'clubs', rank: 'queen', points: 10, img: 'images/queen_of_clubs.png' },
    { suit: 'clubs', rank: 'king', points: 10, img: 'images/king_of_clubs.png' },
    { suit: 'clubs', rank: 'ace', points: 11, img: 'images/ace_of_clubs.png' }
]

const body = document.querySelector('body')
const dealerCardsInPlay = document.querySelector('#dealer-hand')
var dealerDisplay = document.querySelector('#dealerDisplay')
const playerCardsInPlay = document.querySelector('#player-hand')
var playerDisplay = document.querySelector('#playerDisplay')
const dealButton = document.querySelector("#deal-button")
const hitButton = document.querySelector('#hit-button')
const standButton = document.querySelector('#stand-button')
const resetButton = document.querySelector('#reset-button')
const dealerFlop = document.querySelector('#dealer-flop')
var messageDisplay = document.querySelector('#messages')
var currentCard = ""
var winCount = document.querySelector('#win-count')
var playerWinCount = 0;
var dealerWinCount = 0;

class Player {
    constructor(role, currentScore, hand) {
        this.role = role;
        this.currentScore = currentScore;
        this.hand = hand;
    }

    dealPlayerCard() {
        this.hand.push(currentCard)
        this.currentScore += currentCard.points;
        console.log(this.hand)
        let playerCard = document.createElement('img')
        playerCard.setAttribute('class', 'card')
        playerCard.setAttribute('id', 'playerCard')
        playerCard.setAttribute('src', currentCard.img)
        playerCardsInPlay.append(playerCard)
    }

    playerWins(player) {
        playerDisplay.setAttribute('class', 'result-win')
        dealerDisplay.setAttribute('class', 'result-lose')
        dealButton.disabled = false;
        playerWinCount += 1;
    }
}

class Dealer extends Player {
    constructor(role, currentScore, hand, dealerScore) {
        super(role, currentScore, hand)
        this.dealerScore = dealerScore;
    }

    dealDealerCard() {
        this.hand.push(currentCard);
        console.log(this.hand)
        this.currentScore += currentCard.points;
        this.dealerScore += currentCard.points;
        let dealerCard = document.createElement('img')
        dealerCard.setAttribute('class', 'card')
        dealerCard.setAttribute('id', 'dealerCard')
        dealerCard.setAttribute('src', currentCard.img)
        dealerCardsInPlay.append(dealerCard)
    }

    dealerWins(player) {
        dealerDisplay.setAttribute('class', 'result-win')
        playerDisplay.setAttribute('class', 'result-lose')
        dealerWinCount += 1;
        dealButton.disabled = false;
    }
}

let player = new Player('player', 0, [])
let dealer = new Dealer('dealer', 0, [], 0)

function shuffle(deck) {
    let count = deck.length;
    while (count) {
        deck.push(deck.splice(Math.floor(Math.random() * count), 1)[0]);
        count -= 1;
    }
}

function dealerAceCheck() {
    if (dealer.hand.rank == 'ace') {
        if (dealer.dealerScore + 11 > 21) {
            dealer.dealerScore = dealer.dealerScore - 10;
        }
        dealerHasAce = true;
        // else {
        //     dealer.dealerScore = dealer.dealerScore + 11;
        //     dealerHasAce = true;
        // }
    }
}

function playerAceCheck() {
    if (player.hand.rank == 'ace') {
        if (player.currentScore + 11 > 21) {
            player.currentScore = player.currentScore - 10;
        }
        playerHasAce = true;
        // else {
        //     player.currentScore = player.currentScore + 11;
        //     playerHasAce = true;
        // }
    }
}

function dealCard(deck) {
    deck.pop();
    return deck.pop();
}

function checkForBJ() {
    if (player.currentScore === 21 && dealer.dealerScore !== 21) {
        dealerDisplay.textContent = `Dealer: ${dealer.dealerScore}`
        messageDisplay.textContent = 'PLAYER BLACKJACK!!! Click deal to play again'
        hitButton.disabled = true;
        standButton.disabled = true;
        player.playerWins();
        winCount.textContent = `Player Wins: ${playerWinCount} / Dealer Wins: ${dealerWinCount}`;
    }
    if (dealer.dealerScore === 21 && player.currentScore !== 21) {
        dealerDisplay.textContent = `Dealer: ${dealer.dealerScore}`
        messageDisplay.textContent = 'Dealer Blackjack - click deal to play again'
        hitButton.disabled = true;
        standButton.disabled = true;
        dealer.dealerWins();
        flipHiddenCard();
        winCount.textContent = `Player Wins: ${playerWinCount} / Dealer Wins: ${dealerWinCount}`;
    }
    if (dealer.dealerScore === 21 && player.currentScore === 21) {
        dealerDisplay.textContent = `Dealer: ${dealer.dealerScore}`
        messageDisplay.textContent = 'PUSH - click deal to play again'
        hitButton.disabled = true;
        standButton.disabled = true;
        flipHiddenCard();
    }
}

function flipHiddenCard() {
    let dealerCard = document.createElement('img')
    dealerCard.setAttribute('class', 'card')
    dealerCard.setAttribute('id', 'dealerCard')
    currentCard = dealer.hand[1]
    dealerCard.setAttribute('src', currentCard.img)
    dealerCardsInPlay.append(dealerCard)
}

function initializeGame() {
    playerHasAce = false;
    dealerHasAce = false;
    messageDisplay.textContent = "";
    playerDisplay.textContent = 'Player:';
    dealerDisplay.textContent = 'Dealer:';
    dealer.currentScore = 0;
    dealer.dealerScore = 0;
    dealer.hand = [];
    player.currentScore = 0;
    dealer.hand = [];
    playerCardsInPlay.innerHTML = "";
    dealerCardsInPlay.innerHTML = "";
    dealerFlop.innerHTML = "";
    currentCard = dealCard(deck1);
    player.dealPlayerCard();
    playerDisplay.textContent = `Player: ${player.currentScore}`
    currentCard = dealCard(deck1)
    dealer.dealDealerCard();
    dealerDisplay.textContent = `Dealer: ${dealer.currentScore}`
    currentCard = dealCard(deck1)
    player.dealPlayerCard();
    playerDisplay.textContent = `Player: ${player.currentScore}`
    currentCard = dealCard(deck1)
    dealer.hand.push(currentCard)
    dealer.dealerScore += currentCard.points;
    dealerDisplay.textContent = `Dealer: ${dealer.currentScore}`
    console.log(dealer.dealerScore)
    dealButton.disabled = true;
    hitButton.disabled = false;
    standButton.disabled = false;
}

// ======= GAME STARTS HERE =======
var gameDeck = shuffle(deck1)
dealButton.addEventListener('click', (e) => {
    initializeGame();
    checkForBJ();
})

hitButton.addEventListener('click', (e) => {
    playerDisplay.textContent = `Player: ${player.currentScore}`
    currentCard = dealCard(deck1);
    player.dealPlayerCard();
    playerDisplay.textContent = `Player: ${player.currentScore}`
    if (player.currentScore > 21 && dealer.dealerScore < 21) {
        playerAceCheck();
        dealerAceCheck();
        messageDisplay.textContent = 'Player Busts - click deal to play again'
        hitButton.disabled = true;
        standButton.disabled = true;
        playerDisplay.setAttribute('class', 'result-win')
        dealerDisplay.setAttribute('class', 'result-lose')
        dealerDisplay.textContent = `Dealer: ${dealer.dealerScore}`
        let dealerCard = document.createElement('img')
        dealerCard.setAttribute('class', 'card')
        dealerCard.setAttribute('id', 'dealerCard')
        currentCard = dealer.hand[1]
        dealerCard.setAttribute('src', currentCard.img)
        dealerFlop.append(dealerCard)
        dealer.dealerWins();
        dealerWinCount += 1;
        winCount.textContent = `Player Wins: ${playerWinCount} / Dealer Wins: ${dealerWinCount}`
    }
    if (dealer.dealerScore > 21 && player.currentScore < 21) {
        playerAceCheck();
        dealerAceCheck();
        messageDisplay.textContent = 'House Busts, Player Wins - click deal to play again'
        hitButton.disabled = true;
        standButton.disabled = true;
        dealerDisplay.textContent = `Dealer: ${dealer.dealerScore}`
        let dealerCard = document.createElement('img')
        dealerCard.setAttribute('class', 'card')
        dealerCard.setAttribute('id', 'dealerCard')
        currentCard = dealer.hand[1]
        dealerCard.setAttribute('src', currentCard.img)
        dealerFlop.append(dealerCard)
        player.playerWins();
        playerWinCount += 1;
        winCount.textContent = `Player Wins: ${playerWinCount} / Dealer Wins: ${dealerWinCount}`
    }
    if (dealer.dealerScore < 17) {
        currentCard = dealCard(deck1);
        dealer.dealDealerCard();
        playerAceCheck();
        dealerAceCheck();
        console.log(dealer.dealerScore);
    }
    if (player.currentScore === 21 && dealer.dealerScore !== 21) {
        playerAceCheck();
        dealerAceCheck();
        messageDisplay.textContent = 'Player Wins - click deal to play again'
        hitButton.disabled = true;
        standButton.disabled = true;
        dealerDisplay.textContent = `Dealer: ${dealer.dealerScore}`
        let dealerCard = document.createElement('img')
        dealerCard.setAttribute('class', 'card')
        dealerCard.setAttribute('id', 'dealerCard')
        currentCard = dealer.hand[1]
        dealerCard.setAttribute('src', currentCard.img)
        dealerFlop.append(dealerCard)
        player.playerWins();
        playerWinCount += 1;
        winCount.textContent = `Player Wins: ${playerWinCount} / Dealer Wins: ${dealerWinCount}`
    }
    if (dealer.dealerScore === 21 && player.currentScore !== 21) {
        playerAceCheck();
        dealerAceCheck();
        messageDisplay.textContent = 'House Wins - click deal to play again'
        hitButton.disabled = true;
        standButton.disabled = true;
        dealerDisplay.textContent = `Dealer: ${dealer.dealerScore}`
        let dealerCard = document.createElement('img')
        dealerCard.setAttribute('class', 'card')
        dealerCard.setAttribute('id', 'dealerCard')
        currentCard = dealer.hand[1]
        dealerCard.setAttribute('src', currentCard.img)
        dealerFlop.append(dealerCard)
        dealer.dealerWins();
        dealerWinCount += 1;
        winCount.textContent = `Player Wins: ${playerWinCount} / Dealer Wins: ${dealerWinCount}`
    }
    if (dealer.dealerScore == player.currentScore && dealer.dealerScore > 16) {
        playerAceCheck();
        dealerAceCheck();
        messageDisplay.textContent = 'PUSH - click deal to play again'
        hitButton.disabled = true;
        standButton.disabled = true;
        dealerDisplay.textContent = `Dealer: ${dealer.dealerScore}`
        let dealerCard = document.createElement('img')
        dealerCard.setAttribute('class', 'card')
        dealerCard.setAttribute('id', 'dealerCard')
        currentCard = dealer.hand[1]
        dealerCard.setAttribute('src', currentCard.img)
        dealerFlop.append(dealerCard)
        playerDisplay.setAttribute('class', 'result-lose')
        dealerDisplay.setAttribute('class', 'result-lose')
        dealButton.disabled = false;
    }
    // else {
    //     messageDisplay.textContent = 'Click hit or stand'
    // }
})

standButton.addEventListener('click', (e) => {
    playerAceCheck();
    console.log(player.currentScore)
    dealerAceCheck();
    console.log(dealer.dealerScore);
    if (dealer.dealerScore < 17 && player.currentScore <= 21) {
        playerAceCheck();
        dealerAceCheck();
        do {
            currentCard = dealCard(deck1);
            dealer.dealDealerCard();
            dealerAceCheck();
            dealerDisplay.textContent = `Dealer: ${dealer.currentScore}`
        } while (dealer.dealerScore < 17)
    }
    if (dealer.dealerScore > 21 && player.currentScore < 21) {
        playerAceCheck();
        dealerAceCheck();
        messageDisplay.textContent = 'House Busts, Player Wins - click deal to play again'
        hitButton.disabled = true;
        standButton.disabled = true;
        dealerDisplay.textContent = `Dealer: ${dealer.dealerScore}`
        let dealerCard = document.createElement('img')
        dealerCard.setAttribute('class', 'card')
        dealerCard.setAttribute('id', 'dealerCard')
        currentCard = dealer.hand[1]
        dealerCard.setAttribute('src', currentCard.img)
        dealerFlop.append(dealerCard)
        player.playerWins();
        playerWinCount += 1;
        winCount.textContent = `Player Wins: ${playerWinCount} / Dealer Wins: ${dealerWinCount}`
        dealButton.disabled = false;
    }
    if (dealer.dealerScore > player.currentScore && dealer.dealerScore <= 21) {
        playerAceCheck();
        dealerAceCheck();
        messageDisplay.textContent = 'House Wins, Player Loses - click deal to play again'
        hitButton.disabled = true;
        standButton.disabled = true;
        dealerDisplay.textContent = `Dealer: ${dealer.dealerScore}`
        let dealerCard = document.createElement('img')
        dealerCard.setAttribute('class', 'card')
        dealerCard.setAttribute('id', 'dealerCard')
        currentCard = dealer.hand[1]
        dealerCard.setAttribute('src', currentCard.img)
        dealerFlop.append(dealerCard)
        dealer.dealerWins();
        dealerWinCount += 1;
        winCount.textContent = `Player Wins: ${playerWinCount} / Dealer Wins: ${dealerWinCount}`
        dealButton.disabled = false;
    }
    if (dealer.dealerScore === 21 && player.currentScore !== 21) {
        playerAceCheck();
        dealerAceCheck();
        messageDisplay.textContent = 'House Wins - click deal to play again'
        hitButton.disabled = true;
        standButton.disabled = true;
        dealerDisplay.textContent = `Dealer: ${dealer.dealerScore}`
        let dealerCard = document.createElement('img')
        dealerCard.setAttribute('class', 'card')
        dealerCard.setAttribute('id', 'dealerCard')
        currentCard = dealer.hand[1]
        dealerCard.setAttribute('src', currentCard.img)
        dealerFlop.append(dealerCard)
        dealer.dealerWins();
        dealerWinCount += 1;
        winCount.textContent = `Player Wins: ${playerWinCount} / Dealer Wins: ${dealerWinCount}`
        dealButton.disabled = false;
    }
    if (dealer.dealerScore < player.currentScore && player.currentScore < 21) {
        playerAceCheck();
        dealerAceCheck();
        messageDisplay.textContent = 'Player Wins, House Loses - click deal to play again'
        hitButton.disabled = true;
        standButton.disabled = true;
        dealerDisplay.textContent = `Dealer: ${dealer.dealerScore}`
        let dealerCard = document.createElement('img')
        dealerCard.setAttribute('class', 'card')
        dealerCard.setAttribute('id', 'dealerCard')
        currentCard = dealer.hand[1]
        dealerCard.setAttribute('src', currentCard.img)
        dealerFlop.append(dealerCard)
        player.playerWins();
        playerWinCount += 1;
        winCount.textContent = `Player Wins: ${playerWinCount} / Dealer Wins: ${dealerWinCount}`
        dealButton.disabled = false;
    }
    if (dealer.dealerScore == player.currentScore) {
        playerAceCheck();
        dealerAceCheck();
        playerDisplay.setAttribute('class', 'result-lose')
        dealerDisplay.setAttribute('class', 'result-lose')
        messageDisplay.textContent = 'PUSH - click deal to play again'
        hitButton.disabled = true;
        standButton.disabled = true;
        dealerDisplay.textContent = `Dealer: ${dealer.dealerScore}`
        let dealerCard = document.createElement('img')
        dealerCard.setAttribute('class', 'card')
        dealerCard.setAttribute('id', 'dealerCard')
        currentCard = dealer.hand[1]
        dealerCard.setAttribute('src', currentCard.img)
        dealerFlop.append(dealerCard)
        dealButton.disabled = false;
    }

})

resetButton.addEventListener('click', (e) => {
    playerAceCheck();
    dealerAceCheck();
    messageDisplay.textContent = "";
    playerDisplay.removeAttribute('class', 'result-lose')
    playerDisplay.removeAttribute('class', 'result-win')
    dealerDisplay.removeAttribute('class', 'result-lose')
    dealerDisplay.removeAttribute('class', 'result-win')
    playerDisplay.textContent = 'Player:';
    dealerDisplay.textContent = 'Dealer:';
    dealer.currentScore = 0;
    dealer.dealerScore = 0;
    dealer.hand = [];
    player.currentScore = 0;
    dealer.hand = [];
    playerCardsInPlay.innerHTML = "";
    dealerCardsInPlay.innerHTML = "";
    dealerFlop.innerHTML = "";
    dealButton.disabled = false;
})

