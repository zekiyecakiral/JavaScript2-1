"use strict";

function createBase(number1) {
  let counter = 0;
  let sum = 9;
  return function () {
    sum += number1 + (counter * number1) / 2;
    counter++;
    return sum;
  };
}

const addSix = createBase(6);

// Put here your function calls...
console.log(addSix());
console.log(addSix());
console.log(addSix());
