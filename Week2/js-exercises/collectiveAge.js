"use strict";

const hackYourFutureMembers = [
  { name: "Wouter", age: 33 },
  { name: "Federico", age: 32 },
  { name: "Noer", age: 27 },
  { name: "Tjebbe", age: 22 },
];

const memberAges = hackYourFutureMembers.map((member) => member.age);

function sumAge() {
  return memberAges.reduce((a, b) => a + b, 0);
}

function main() {
  const number = sumAge();
  console.log(`The collective age of the HYF team is: ${number}`);
  return number;
}
main();
