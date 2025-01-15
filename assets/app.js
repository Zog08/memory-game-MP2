const cards = document.querySelectorAll('.memory-card'); // get all memory cards
const counter = document.querySelector(".moves"); // moves counter div
const time =  document.querySelector(".timer"); // timer div
const accordion = document.querySelectorAll(".panel"); // target the panels for the drop down accordion on index page

// accordion function - with help from Laurence Svekis on Udemy https://www.udemy.com/share/101XdM/
accordion.forEach(function (ele) {              
    ele.addEventListener('click', toggleEle);
});

function toggleEle(e) {
    accordion.forEach(function(ele) {
        ele.classList.remove('active');
    });
    this.classList.toggle('active');
}

//----------------- Store cards
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let pairs = 0,
    moves = 0,
    seconds = 0,
    minutes = 0;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;     // if the card has been double clicked, return from the function
    this.classList.add('flip');         // add flip card class when flipped first time
    moveCounter();

    if (!hasFlippedCard) {
        hasFlippedCard = true;          // first flip
        firstCard = this;
        return;
    }
    secondCard = this;                  // second card flip
    checkForMatch();
}

function checkForMatch() {              // do the cards match?
    let isMatch = firstCard.dataset.pic === secondCard.dataset.pic; 
       isMatch ? disableCards() : unflipCards(); // simplified if / else statement to ternary operator     
}

function disableCards() {               // match found. remove the event listener so cards cant be un-flipped.
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        pairs++;
        if (pairs == 6) endGame();
        resetBoard();
}

function unflipCards() {
    lockBoard = true;                   // if no match, remove class list of .flip to reset
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
(function shuffle() {                   // Assign each card a new random position on the board
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})(); 

function startTimer () {                // timer starts on first click
    interval = setInterval(() => {
        time.innerHTML = minutes + "mins " + seconds + "secs";
        seconds++;
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

cards.forEach(card => card.addEventListener('click', flipCard));

// ----------------------------------------- game over
const finalScore = document.getElementById("final-score");
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("save-score-btn");
const mostRecentScore = localStorage.getItem('mostRecentScore'); //get most recent score from local storage saved at endgame()
const highScoresList = document.getElementById("high-scores-list");
const highScores = JSON.parse(localStorage.getItem("highScores")) || []; // get high scores array from storage, parse items || of for first time it initialises an empty array
// const MAX_HIGH_SCORES = 5;

function redirect() {
    window.open("end.html", "_self"); // redirects you to end page to store score
 }

function endGame() {
    setTimeout(()=> {
        stopTimer();
        localStorage.setItem('mostRecentScore', moves);
        redirect();
    }, 300);
}

function moveCounter() {            // moves and timer learning, CogniVis AI youtube channel, https://youtu.be/-5V0rUxJUbY?feature=shared
    moves++;                        // add 1 to moves counter each flip. 
    counter.innerHTML = moves;      // show in .moves html
    if (moves == 1) {               // starts timer on first move, not on page load
        startTimer();
    }
}

finalScore.innerText = mostRecentScore;
username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value; // disable the save button if nothing is typed in the name input, listen for keyup
});

saveHighScore = e => {              // saveHighScore is an onclick event in end.html
    e.preventDefault();

const score = {
    name: username.value,
    score: mostRecentScore
};

highScores.push(score);
highScores.sort( (a,b) => a.score - b.score);       // Order the score array with implicit arrow function. a-b sorts ascending
highScores.splice(5);                               // only top5 scores in the array
localStorage.setItem("highScores", JSON.stringify(highScores)); // keeps the previous scores saved in local storage on refresh. turn hiscore to string
window.location.reload();                           // reloads page when you click save, to show updated hiscore board
};

highScoresList.innerHTML = highScores   
        .map(score => {
            return `<li class="high-score">${score.name} - ${score.score}</li>`;
        })
    .join("");