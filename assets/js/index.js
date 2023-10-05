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
