const cards = document.querySelectorAll('.memory-card'); // get all memory cards

function flipCard() {
    console.log('I was clicked');
    console.log(this);
}

cards.forEach(card => card.addEventListener('click', flipCard))