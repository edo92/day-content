var fs = require("fs");

console.log("before read");

fs.readFile("written.txt", "utf8", function(err, data) {

  console.log("before append");

  // will block script until finished
  // we use .repeat() so we can see that it does take a few seconds to write that much content to the file
  fs.appendFileSync("written.txt", "Hello Kitty".repeat(10000000));

  console.log("after append");
});

console.log("after read");