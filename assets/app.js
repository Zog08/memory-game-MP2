const tilesContainer = document.querySelector(".tiles");
const pics = ["abigail", "alex", "caroline", "cat", "chicken", "clint", "demetrius", "dog", "elliott", "emily", "evelyn", "george", "gus", "haley", "harvey", "horse", "junimo", "krobus", "leah", "linus", "maru", "penny", "sam", "sebastian", "shane"];
const picsPicklist = [...pics, ...pics]; // create two arrays of the same random array, spread
const tileCount = picsPicklist.length;

// Game state
let revealedCount = 0; // start game with no tiles revealed
let activeTile = null; // are there any first tile revealed active?
let awaitingEndOfMove = false; // waiting for two incorrect match tiles to be returned to back face

function buildTile(pic) {
    const element = document.createElement("div"); // create tile div in html
    element.classList.add("tile"); // set the class of .tile to this div
    element.setAttribute("data-pic", pic); // assigns pic to each element
}

// build the tiles
for (let i = 0; i < tileCount; i++) {
    const randomIndex = Math.floor(Math.random() * picsPicklist.length);
    const pic = picsPicklist[randomIndex];
    const tile = buildTile(pic);

    picsPicklist.splice(randomIndex, 1);
    console.log(pic);
}