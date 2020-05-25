"use strict";

function createBase(number = 0) {
  return function (closureNum = 0) {
    return closureNum + number;
  };
}

const addSix = createBase(6);

// Put here your function calls...
console.log(addSix());
console.log(addSix(9));
console.log(addSix(18));
console.log(addSix(30));
