var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];

var random_value = stuff[ Math.floor( Math.random() * 14 ) ];
console.time("loopy")
var index = stuff.indexOf(random_value)
// write an algorithm to find "random_value" in "stuff"
console.log(index, " " , random_value) 

console.timeEnd("loopy")