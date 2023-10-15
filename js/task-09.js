const buttonEl = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorField = document.querySelector(".color");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonEl.addEventListener("click", chageColorHandler);

function chageColorHandler(evt) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorField.textContent = color;
}
