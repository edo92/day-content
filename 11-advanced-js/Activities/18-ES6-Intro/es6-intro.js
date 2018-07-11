// variables declared three different ways
var myVar1 = "hello";
let myVar2 = "hello again";
const myVar3 = "goodbye";

// we can still use them like normal variables
console.log(myVar1, myVar2, myVar3);

// the only difference is the scope that they are available in, which we will talk about in more detail later. "const" variables also cannot be changed once defined.

// this will throw an error
// myVar3 = "i said goodbye";

// shorthand arrow syntax can replace the function keyword
setTimeout(() => {
  console.log("arrow function timeout");
}, 1000);

setTimeout(function() {
  console.log("regular function timeout");
}, 1000);

// example with arguments
var addSomeNumbers = (x, y) => {
  console.log(x + y);
};

addSomeNumbers(5, 10);