const elemCategories = document.querySelector("#categories");

const listCategories = [...elemCategories.children];
console.log(`Number of ${elemCategories.id} : ${listCategories.length}`);
listCategories.forEach(({ firstElementChild, lastElementChild }) => {
  console.log(
    `Category: ${firstElementChild.textContent}
Elements ${[...lastElementChild.children].length}`
  );
});

// Можна і так ще зробити

// const listCategories = [...document.querySelector("#categories").children];
// console.log(`Number of categories : ${listCategories.length}`);
// listCategories.forEach(({ firstElementChild, lastElementChild }) => {
//   console.log(
//     `Category: ${firstElementChild.textContent}\nElements ${
//       [...lastElementChild.children].length
//     }`
//   );
// });
