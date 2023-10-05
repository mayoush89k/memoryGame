// Mira
const resetCardGame = document.getElementById("resetButton");
resetCardGame.addEventListener("click", resetGame);

function resetGame() {
  window.location.reload();
}

const wrongGuess = document.getElementById("wrongGuessCount");
function updateWrongGuessCount(compareVal) {
  if (compareVal == false) {
    wrongGuess.textContent++;
  }
}

// Mira
//Jihad Work .....
const cards = document.querySelectorAll(".memory-card");
const guessCount = document.getElementById("guessCount");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
function resetSelection() {
  lockBoard = false;
  hasFlippedCard = false;
  firstCard = null;
  secondCard = null;
}
let found = 0;
//create a function as (event) to flip the cards
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
  if (comp) {
    // both cards match
    // updateGuessCount();
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetSelection();
    found++;
    setTimeout(() => {
      // game won
      if (found === 6) alert("congrats");
    }, 600);
  } // cards don't match
  else {
    updateWrongGuessCount(comp);
    unflip();
  }
}
function unflip() {
  /**
   * 1 lockboard + delay
   * 2 reflip selected cards
   * 3 reset selection
   */
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetSelection();
  }, 1500);
}
// Add click event listeners directly to each card
cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});

function updateGuessCount() {
  let guessCount = 0;
  guessCount.textContent++;
}

// Jihad work
// May
//save all cards
const gameCards = document.querySelector(".memory-game");
const frontImages = [...cards];
// remove cards from parent section
cards.forEach((card) => {
  gameCards.removeChild(card);
});
// re-Add cards to parent but shuffled order
cards.forEach((card) => {
  const random = (Math.random() * (frontImages.length - 1)).toFixed();
  gameCards.appendChild(frontImages[random]);
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
