const body = document.body;
const mainHeading = document.querySelector(".main-heading");
const button = document.querySelector("button");

function randomColorGenerator() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${red},${green},${blue})`;
  return randomColor;
}

button.addEventListener("click", function () {
  const randomColor = randomColorGenerator();
  body.style.backgroundColor = randomColor;
  mainHeading.textContent = `random color ${randomColor}`;
  button.classList.toggle("btn-animation");
});
