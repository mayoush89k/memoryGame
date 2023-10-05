// zaid's work ******************
const cards = document.querySelectorAll(".memory-card");
console.log("cards: ", cards);

cards.forEach((card) => {
  console.log(card.getAttributeNode(["data-name"]).textContent);
});

// compare 2 cards
function compareCards(a, b) {
  let nameA = a.getAttributeNode(["data-name"]).textContent;
  let nameB = b.getAttributeNode(["data-name"]).textContent;
  if (nameA === nameB) return true;
  else return false;
}

/**
 * if 2 cards are slected
 * pervent other cards form being selectable
 */
let canClick = true;

function cardClickHandler(event) {
  if (!canClick) {
    return;
  }
  console.log(event);

  // Your card click logic goes here

  canClick = false;

  // Set a timeout to re-enable clicking after a certain duration (for example, 1 second)
  setTimeout(() => {
    canClick = true;
  }, 1000);
}
cards.forEach((card) => {
  card.addEventListener("click", cardClickHandler);
});
