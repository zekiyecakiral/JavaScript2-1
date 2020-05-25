"use strict";

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  numbers.forEach((number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      threeCallback(number);
      fiveCallback(number);
    }
    if (number % 3 === 0) {
      threeCallback(number);
    }
    if (number % 5 === 0) {
      fiveCallback(number);
    }
  });
}

const sayThree = function (number) {
  console.log(number + " is divisible by three");
};
const sayFive = function (number) {
  console.log(number + " is divisible by five");
};
threeFive(10, 15, sayThree, sayFive);
