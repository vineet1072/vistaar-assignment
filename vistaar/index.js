const imageElement = document.getElementById("changing-image");
const blobElement = document.getElementById("changing-blob");
const panels = document.querySelectorAll(".panel");
const bullets = document.querySelectorAll(".bullet");
const nextButton = document.getElementById("nextButton");

const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const section1 = document.querySelector(".section-1-hide");

openButton.addEventListener("click", function () {
  openButton.classList.remove("open");
  openButton.classList.add("open-hide");
  section1.classList.remove("section-1-hide");
  section1.classList.add("section-1-show");
});

closeButton.addEventListener("click", function () {
  openButton.classList.remove("open-hide");
  openButton.classList.add("open");
  section1.classList.remove("section-1-show");
  section1.classList.add("section-1-hide");
});

let currentIndex = 0;

const imageSources = [
  "/images/gambler.png",
  "/images/quiz-1.png",
  "/images/selfie.png",
  "/images/education.png",
  "/images/pledge.png",
  "/images/survey.png",
  "/images/quiz.png",
];

const pathsArray = [
  "M42.7,-53.3C56.7,-39.2,70.2,-27,73.9,-12.1C77.5,2.7,71.4,20.2,61.9,35.1C52.5,50,39.9,62.3,25.2,66.3C10.6,70.4,-5.9,66.1,-22.3,60.5C-38.6,54.8,-54.8,47.9,-63.4,35.4C-71.9,23,-73,5,-70.4,-12.9C-67.9,-30.8,-61.8,-48.6,-49.5,-63C-37.1,-77.4,-18.6,-88.4,-2.1,-85.9C14.4,-83.4,28.8,-67.4,42.7,-53.3Z",
  "M56.8,-53C70.1,-43.4,75.2,-21.7,73.7,-1.5C72.2,18.7,64.1,37.4,50.8,48.9C37.4,60.5,18.7,64.9,2.6,62.3C-13.4,59.7,-26.9,50,-43.3,38.4C-59.6,26.9,-79,13.4,-82.2,-3.2C-85.4,-19.9,-72.6,-39.8,-56.2,-49.5C-39.8,-59.1,-19.9,-58.5,0.9,-59.4C21.7,-60.3,43.4,-62.7,56.8,-53Z",
  "M50.9,-43.6C61.6,-27.1,62.9,-6.2,59.3,15C55.6,36.3,47,57.9,31.4,65.5C15.9,73,-6.6,66.6,-28.5,56.9C-50.4,47.2,-71.8,34.2,-74.1,18.5C-76.3,2.8,-59.5,-15.6,-44,-33.1C-28.4,-50.7,-14.2,-67.3,2.9,-69.7C20.1,-72,40.1,-60,50.9,-43.6Z",
  "M50.9,-43.6C61.6,-27.1,62.9,-6.2,59.3,15C55.6,36.3,47,57.9,31.4,65.5C15.9,73,-6.6,66.6,-28.5,56.9C-50.4,47.2,-71.8,34.2,-74.1,18.5C-76.3,2.8,-59.5,-15.6,-44,-33.1C-28.4,-50.7,-14.2,-67.3,2.9,-69.7C20.1,-72,40.1,-60,50.9,-43.6Z",
  "M50.9,-43.6C61.6,-27.1,62.9,-6.2,59.3,15C55.6,36.3,47,57.9,31.4,65.5C15.9,73,-6.6,66.6,-28.5,56.9C-50.4,47.2,-71.8,34.2,-74.1,18.5C-76.3,2.8,-59.5,-15.6,-44,-33.1C-28.4,-50.7,-14.2,-67.3,2.9,-69.7C20.1,-72,40.1,-60,50.9,-43.6Z",
  "M50.9,-43.6C61.6,-27.1,62.9,-6.2,59.3,15C55.6,36.3,47,57.9,31.4,65.5C15.9,73,-6.6,66.6,-28.5,56.9C-50.4,47.2,-71.8,34.2,-74.1,18.5C-76.3,2.8,-59.5,-15.6,-44,-33.1C-28.4,-50.7,-14.2,-67.3,2.9,-69.7C20.1,-72,40.1,-60,50.9,-43.6Z",
  "M50.9,-43.6C61.6,-27.1,62.9,-6.2,59.3,15C55.6,36.3,47,57.9,31.4,65.5C15.9,73,-6.6,66.6,-28.5,56.9C-50.4,47.2,-71.8,34.2,-74.1,18.5C-76.3,2.8,-59.5,-15.6,-44,-33.1C-28.4,-50.7,-14.2,-67.3,2.9,-69.7C20.1,-72,40.1,-60,50.9,-43.6Z",
];

const fillColors = [
  "#8B45E3",
  "#FF5733",
  "#15A72A",
  "#FF5733",
  "#15A72A",
  "#FF5733",
  "#FF5733",
];

function changeImage() {
  currentIndex = (currentIndex + 1) % imageSources.length;

  imageElement.src = imageSources[currentIndex];
  blobElement.setAttribute("fill", fillColors[currentIndex]);
  blobElement.setAttribute("d", pathsArray[currentIndex]);
}

setInterval(changeImage, 2000);

// Function to activate a specific panel by index
function activatePanel(index) {
  panels.forEach((panel) => panel.classList.remove("active"));
  bullets.forEach((bullet) => bullet.classList.remove("active"));

  panels[index].classList.add("active");
  bullets[index].classList.add("active");
  currentIndex = index;
}

// Function to show the next panel
function showNextPanel() {
  currentIndex = (currentIndex + 1) % panels.length;
  activatePanel(currentIndex);
}

// Event listeners for the bullets and the "Next" button
bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    activatePanel(index);
  });

  panels[index].addEventListener("click", () => {
    activatePanel(index);
  });
});

nextButton.addEventListener("click", () => {
  showNextPanel();
});
