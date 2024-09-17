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
    console.log(firstCard.dataset.pic); // added dataset of first card
    console.log(secondCard.dataset.pic); // added dataset of second card
   }
}

cards.forEach(card => card.addEventListener('click', flipCard))