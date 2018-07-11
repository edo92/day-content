let x = 5;
let test1;

// check to see if a number is five or not, then set test1 to a string
if (x === 5) {
  test1 = "yes, this is five";
}
else {
  test1 = "no, this is not five";
}

console.log(test1);

// with ternary expressions, we can accomplish the same logic with just one line:
let test2 = x === 5 ? "yes, this is five" : "no, this is not five";
console.log(test2);

// the syntax is essentially...
// is this true ? then use this : otherwise use this;

// try writing a ternary expression to replace the following code:
let obj = {name: "joe", location: "ca"};
let test3;

if (obj.name === "jim") {
  test3 = "nv";
}
else {
  test3 = obj.location;
}


test3 = obj.name === "joe" ? "nv": obj.location;
console.log(test3);

// why is this useful in react?