// i can call this function here, because the way it was declared has "hoisted" it to the top of the scope
sayHello();

function sayHello() {
  console.log("hello");
}

// but this will give me an error, because the function doesn't exist until it's been assigned to a variable below
sayGoodbye();

var sayGoodbye = function() {
  console.log("goodbye");
};

// it will work here, though
sayGoodbye();