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
