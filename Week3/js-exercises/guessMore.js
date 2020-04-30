"use strict"
// Snippet
const x = 9; 
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);


/* 

First out will be 9, second output will be 10

There are  primitive types and referance types in Javascript.
First function (f1) has an argument that is primitive type. 
Primitive parameters are passed to functions by value; 
the value is passed to the function, but if the function changes the value of the parameter, 
this change is not reflected globally
So,value of x, will not be change.


Second function (f2) has an argument that is reference type.
If you pass an object as a parameter and the function changes the object's properties,
that change is visible outside the function.
So, value of y, wil be change as 10.


*/




