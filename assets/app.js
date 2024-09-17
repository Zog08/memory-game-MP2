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

    console.log({firstCard, secondCard});
   }
}

cards.forEach(card => card.addEventListener('click', flipCard))