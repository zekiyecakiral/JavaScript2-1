// Snippet
let a = 10;
const x = (function() {
  a = 12;
  return function() {
    console.log(a);
  };
})();

x();

// Firstly, "a" variable was assigned value of 10. 
// This variable was declared in global scope therefore, all scripts and functions can access it.
// After that, declared x function and inner this function a was reassigned value of 12 and this function returns a new function
// The new function is called a closure and this function can be access called "a" variable.
// Because the inner function has access to the scope in the outer function