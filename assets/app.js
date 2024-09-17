const cards = document.querySelectorAll('.memory-card'); // get all memory cards

// Store cards
let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
   this.classList.add('flip'); // add flip card class when flipped first time
   if (!hasFlippedCard) {
        // first flip
    hasFlippedCard = true;
    firstCard = this;
   } else {
        // second card flip
    hasFlippedCard = false;
    secondCard = this;
    
    checkForMatch();
   }
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
}

function unflipCards() {
     // if no match, remove class list of flip to reset
        setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1000);
}

cards.forEach(card => card.addEventListener('click', flipCard));