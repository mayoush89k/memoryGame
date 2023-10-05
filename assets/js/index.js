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
