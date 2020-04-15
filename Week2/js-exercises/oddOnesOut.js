"use strict";
// function doubleEvenNumbers(numbers) {
//     const newNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] % 2 === 0) {
//         newNumbers.push(numbers[i] * 2);
//       }
//     }
//     return newNumbers;
//   }
  

 // even numbers
  const myNumbers = [1, 2, 3, 4, 5];
  const doubleEvenNumbers  = myNumbers.filter(number => number % 2 === 0).map(number => number * 2);
  console.log(doubleEvenNumbers);

// odd numbers 
  const doubleOddNumbers  = myNumbers.filter(number => number % 2 !== 0).map(number => number * 2);
  console.log(doubleOddNumbers);
