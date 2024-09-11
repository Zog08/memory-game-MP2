const tilesContainer = document.querySelector(".tiles");
const pics = ["abigail", "alex", "caroline", "cat", "chicken", "clint", "demetrius", "dog", "elliott", "emily", "evelyn", "george", "gus", "haley", "harvey", "horse", "junimo", "krobus", "leah", "linus", "maru", "penny", "sam", "sebastian", "shane"];
const picsPicklist = [...pics, ...pics]; // create two arrays of the same random array, spread
const tileCount = picsPicklist.length;

// Game state
let revealedCount = 0; // start game with no tiles revealed
let activeTile = 0; // are there any first tile revealed active?
let awaitingEndOfMove = false; // waiting for two incorrect match tiles to be returned to back face