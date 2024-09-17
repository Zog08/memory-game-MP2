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
        // do the cards match?
    if (firstCard.dataset.pic === secondCard.dataset.pic) {
        // match found. remove the event listener so cards cant be un-flipped.
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    } else {
        // if no match, remove class list of flip to reset
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }
   }
}

cards.forEach(card => card.addEventListener('click', flipCard))