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