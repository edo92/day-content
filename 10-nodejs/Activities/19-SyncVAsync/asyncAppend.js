var fs = require("fs");

console.log("before read");

fs.readFile("written.txt", "utf8", function(err, data) {

  console.log("before append");

  fs.appendFile("written.txt", "Hello Kitty", function(err) {

    console.log("inside append");

  });

  console.log("after append");
});

console.log("after read");
