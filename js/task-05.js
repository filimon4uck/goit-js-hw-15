const inputEl = document.querySelector("#name-input");
const outEl = document.querySelector("#name-output");
inputEl.addEventListener("input", inputHandler);

function inputHandler(evt) {
  const inputText = evt.target.value;
  if (inputText) {
    outEl.textContent = inputText;
  } else {
    outEl.textContent = "Anonymous";
  }
}
