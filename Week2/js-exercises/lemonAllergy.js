"use strict";

const fruitBasket = [
  "Apple",
  "Lemon",
  "Grapefruit",
  "Lemon",
  "Banana",
  "Watermelon",
  "Lemon",
];
const fruitBasketFilter = () => {
  const filteredArray = fruitBasket.filter((fruit) => fruit !== "Lemon");
  return `My mom bought me a fruit basket, containing ${filteredArray}!`;
};
console.log(fruitBasketFilter());
