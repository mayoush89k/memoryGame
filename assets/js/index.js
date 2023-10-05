// Mira 
const resetCardGame = document.getElementById("resetButton");
resetCardGame.addEventListener("click", resetGame);

function resetGame() {
    window.location.reload()
    };

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
//save all cards
const gameCards = document.querySelector(".memory-game");
const frontImages = [...cards];
// remove cards from parent section
cards.forEach(card => {
    gameCards.removeChild(card)
})
// re-Add cards to parent but shuffled order
cards.forEach(card => {
    const random = (Math.random() * (frontImages.length - 1)).toFixed();
    gameCards.appendChild(frontImages[random])
    frontImages.splice(random,1)
})

// May
