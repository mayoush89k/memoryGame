// Mira
const resetCardGame = document.getElementById("resetButton");
resetCardGame.addEventListener("click", resetGame);

function resetGame() {
  window.location.reload();
}

// Mira
//Jihad Work .....
const cards = document.querySelectorAll(".memory-card");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    const imgb = card.children[0];
    imgb.setAttribute("class", "back-face");
    const imgf = card.children[1];
    imgf.setAttribute("class", "front-face");
  });
});
// Jihad work
// May
//save all images name
const frontImages = [
  "bear",
  "juice",
  "neon",
  "lemon",
  "seal",
  "waterfall",
  "bear",
  "juice",
  "neon",
  "lemon",
  "seal",
  "waterfall",
];
// get all img from HTML with class name 'front-face
const images = document.querySelectorAll(".front-face");
// change its attribute by random number
images.forEach((image) => {
  const random = (Math.random() * (frontImages.length - 1)).toFixed();
  image.setAttribute("src", `assets/images/${frontImages[random]}.jpg`);
  frontImages.splice(random, 1);
});

// May
// zaid's work ******************
console.log("cards: ", cards);

cards.forEach((card) => {
  console.log(card.getAttributeNode(["data-name"]).textContent);
  // add flag: flipped = false
});

// compare 2 cards
function compareCards(a, b) {
  let nameA = a.getAttributeNode(["data-name"]).textContent;
  let nameB = b.getAttributeNode(["data-name"]).textContent;
  if (nameA === nameB) return true;
  else return false;
}

/**
 *  click -> if(!busy) if(!flipped) -- > ( timeout )->  compare ->
 *  compare -> add Guess () + keepimgsFlipped --> check if all are flipped (Game Won)
 *  ->
 */

/**
 * if 2 cards are slected
 * pervent other cards form being selectable
 */

let busy = false; // there are 2 cards being compared
let firstCard, secondCard;
let cardFlipped = false; // there is 1 card flipped

function resetSelection() {
  busy = false;
  cardFlipped = false;
  firstCard = null;
  secondCard = null;
}

function flipCard(e) {}
