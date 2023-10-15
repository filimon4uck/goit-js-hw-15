const counterBox = document.querySelector("#counter");
const value = document.querySelector("#value");

counter.addEventListener("click", countHendler);

let counterValue = 0;
function countHendler(event) {
  if (event.target.getAttribute("data-action") === "increment") {
    counterValue += 1;
  } else if (event.target.getAttribute("data-action") === "decrement") {
    counterValue -= 1;
  }

  value.innerHTML = `${counterValue}`;
}
