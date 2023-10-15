const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elemIngredients = document.querySelector("#ingredients");
function createMurkup(arr) {
  const markup = arr.map((elem) => {
    const li = document.createElement("li");
    li.setAttribute("class", "item");
    li.textContent = elem;
    console.log(li);
    return li;
  });
  elemIngredients.append(...markup);
}

createMurkup(ingredients);
