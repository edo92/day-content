// rand-token will generate a random string of x number of letters and numbers
const randtoken = require('rand-token');

// var token = randtoken.generate(120);
// console.log(token);

// the rand-token package is pretty lightweight, so there's no harm in using it, but is it really saving us that much work? i bet we could write our own makeToken() algorithm that accomplishes the same thing
var rendome = (Math.random().toString(36).slice(2))
console.log(rendome)