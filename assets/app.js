const cards = document.querySelectorAll('.memory-card'); // get all memory cards

// Store cards
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let pairs = 0;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return; // if the card has been double clicked, return from the function

    this.classList.add('flip'); // add flip card class when flipped first time
    
    if (!hasFlippedCard) {
        // first flip
        hasFlippedCard = true;
        firstCard = this;

        return;
    }
        // second card flip
    
    secondCard = this;
    
    checkForMatch();
   
}

function checkForMatch() {
        // do the cards match?
    let isMatch = firstCard.dataset.pic === secondCard.dataset.pic; 
       isMatch ? disableCards() : unflipCards(); // simplified if / else statement to ternary operator
        
}

function disableCards() {
     // match found. remove the event listener so cards cant be un-flipped.
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        pairs++;

        if (pairs == 6) endGame();
        resetBoard();
}

function unflipCards() {
    lockBoard = true;
     // if no match, remove class list of .flip to reset
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})(); // Immediately Invoked Function Expression, IIFE - invokes as soon as the page is loaded instead of calling on it during the program

function endGame() {
    setTimeout(()=> {
        alert("You won!");
    }, 300)
    
}

cards.forEach(card => card.addEventListener('click', flipCard));