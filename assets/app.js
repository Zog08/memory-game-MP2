const cards = document.querySelectorAll('.memory-card'); // get all memory cards
const counter = document.querySelector(".moves"); // moves counter div
const time =  document.querySelector(".timer"); // timer div
const accordion = document.querySelectorAll(".panel"); // target the panels for the drop down accordion on index page
// const youWon = document.getElementById("you-won");

accordion.forEach(function (ele) {              // accordion function - with help from Laurence Svekis on Udemy 
    console.log(ele);
    ele.addEventListener('click', toggleEle);
})

function toggleEle(e) {
    accordion.forEach(function(ele) {
        ele.classList.remove('active');
    })

    this.classList.toggle('active');

}

// Store cards
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let pairs = 0,
    moves = 0,
    seconds = 0,
    minutes = 0;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return; // if the card has been double clicked, return from the function

    this.classList.add('flip'); // add flip card class when flipped first time
    moveCounter();

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

const finalScore = document.getElementById("finalScore");
//const score = document.getElementsByClassName("score");
function redirect() {
    window.open("end.html", "_self"); // redirects you to end page to store score
   //finalScore.innerText = `${(mins * 60) + secs + moves}`;
    //console.log(score);
 }

 
function startTimer () {
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


function endGame() {
    setTimeout(()=> {
        stopTimer();
        localStorage.setItem('mostRecentScore', moves);
        //localStorage.setItem('mostRecentTime', secs);
        redirect();
        //endScore();
        //alert(`You won in ${moves} moves, in ${minutes} minutes and ${seconds} seconds!`);     // template literal, displays winning moves and time in the alert box
       // document.getElementById("you-won").innerText = `You won in ${moves} moves, in ${minutes} minutes and ${seconds} seconds!`
    }, 300);
    
}

function moveCounter() {        // moves and timer learning, see readme for details (CogniVis AI youtube channel)
    moves++;                    // add 1 to moves counter each flip. 
    counter.innerHTML = moves;  // show in .moves html

    if (moves == 1) {           // starts timer on first move, not on page load
        startTimer();
    }
}






// function endScore () {
//   document.getElementById("finalScore").innerText = `You won in ${moves} moves, in ${minutes} minutes and ${seconds} seconds!`;
// }

// End Page, high scores

const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const mostRecentScore = localStorage.getItem('mostRecentScore'); //get most recent score from local storage saved at endgame()
//const mostRecentTime = localStorage.getItem('mostRecentTime'); //get most recent time

const highScores = JSON.parse(localStorage.getItem("highScores")) || []; // get high scores array from storage, parse items || of for first time it initialises an empty array
const MAX_HIGH_SCORES = 5;

console.log(highScores);

finalScore.innerText = mostRecentScore;
username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value; // disable the save button if nothing is typed in the name input, listen for keyup
});

saveHighScore = e => {
    console.log("clicked save");
    e.preventDefault();

const score = {
    name: username.value,
    score: Math.floor(Math.random() * 100)
    //time: mostRecentTime
};

highScores.push(score);
highScores.sort( (a,b) => a.score - b.score); // Order the score array with implicit arrow function ADD IN WITH RESEARCH!! LATEST PUSH!
highScores.splice(5); // only top5 scores in the array
console.log(highScores);
};