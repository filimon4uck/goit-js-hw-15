const inputEl = document.querySelector("#validation-input");

const lengthSymbols = Number(inputEl.dataset.length);
inputEl.addEventListener("blur", inputHandler);
function inputHandler(evt) {
  if (evt.target.value.length === lengthSymbols) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
