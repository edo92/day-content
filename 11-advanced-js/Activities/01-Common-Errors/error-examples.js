// Error: Cannot find module './water.js'
var water = require("./water.js");

// we tried to require something that doesn't exist. if this is a third-party module, let's make sure we've npm installed it. if it's a local file, check to see if the file is in the correct directory. we may have to update the filepath to see it. for example: "../models/water.js"

// TypeError: Cannot read property 'makeSandwich' of undefined
var kitchen;
kitchen.makeSandwich();

// this doesn't mean there's something wrong with the makeSandwich function. it means there's something wrong with the parent object. in this case, kitchen. basically, javascript tried to run "undefined.makeSandwich()." we would need to investigate why kitchen is undefined. did we forget to set it equal to something?

// SyntaxError: Unexpected identifier
var obj = {
	prop1: "hello"
	prop2: "world"
};

// the error message will also point to "prop2" as being the source of the problem, but that's only because javascript was expecting something else beforehand. on the previous line, it needed to see a comma, but we forgot the comma and went straight to defining the second property. always look at the code above/before when the error message complains about unexpected identifiers and tokens.

// Error: ENOENT: no such file or directory
var fs = require("fs");
fs.readFile("water.txt", "utf-8", function(err, data) {
	console.log(data, err);
});

// in this example, the "error" won't actually break our application, but we may be left wondering why the data is coming back undefined. in situations like this, where data in a callback is empty, try console logging the error argument to see what the problem really is.