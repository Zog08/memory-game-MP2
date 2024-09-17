const cards = document.querySelectorAll('.memory-card'); // get all memory cards

function flipCard() {
   this.classList.toggle('flip'); // toggle flip class, if there remove, if not add it
}

cards.forEach(card => card.addEventListener('click', flipCard))