// let's start with a simple string
var test1 = "hello";

// and make a copy of the string
var test2 = test1;

// and then update the new string
test2 += ", dude";

// if we console log test1, it should still say "hello"
console.log(test1);

// makes sense so far. but what about objects?

// this object has one property
var obj1 = {name: "taco"};

// let's attempt to copy this object
var obj2 = obj1;

// and add a new property to the new object
obj2.taste = "meh";

// but if we console log the first object, what happened?!
console.log(obj1);

// updating obj2 affected obj1, because obj2 is a reference, not a completely new object. in javascript, objects and arrays are always passed "by reference"

// so how can we safely copy this object?
var obj3 = {value: 250};