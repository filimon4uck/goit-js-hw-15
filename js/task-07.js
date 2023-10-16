const inputEl = document.querySelector("#font-size-control");
const textDisplay = document.querySelector("#text");
textDisplay.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener("input", fontSizeHandler);

function fontSizeHandler(evt) {
  textDisplay.style.fontSize = `${evt.target.value}px`;
}
