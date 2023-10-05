// Mira
const resetCardGame = document.getElementById("resetButton");
resetCardGame.addEventListener("click", resetGame);

function resetGame() {
  window.location.reload();
}

// Mira
//Jihad Work .....
const cards = document.querySelectorAll(".memory-card");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard || this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  let comp = compareCards(firstCard, secondCard);
  console.log("comp: ", comp);
}
// Add click event listeners directly to each card
cards.forEach((card) => {
  card.addEventListener("click", flipCard);
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

function resetSelection() {
  busy = false;
  cardFlipped = false;
  firstCard = null;
  secondCard = null;
}
