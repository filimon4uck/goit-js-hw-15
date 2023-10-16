const divEl = document.querySelector("#boxes");
const divControls = document.querySelector("#controls");

divControls.addEventListener("click", buttonHandler);

let isCreated = false;
function buttonHandler({ target, currentTarget } = evt) {
  if (target.dataset.hasOwnProperty("create")) {
    if (isCreated) {
      alert('You have created boxes, click "destroy" button');
    } else {
      divEl.insertAdjacentHTML(
        "afterbegin",
        createBoxes(Number(currentTarget.firstElementChild.value))
      );
      isCreated = true;
    }
  }
  if (target.dataset.hasOwnProperty("destroy") && isCreated) {
    destroyBoxes();
    isCreated = false;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  let width = 30;
  let height = 30;
  let div = [];
  for (let index = 0; index < amount; index++) {
    div.push(`<div class="box"
        style="display: block; width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}"
      >
      </div>`);
    width += 10;
    height += 10;
  }
  return div.join("");
}

function destroyBoxes() {
  document.querySelectorAll(".box").forEach((elem) => elem.remove());
}
