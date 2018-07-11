// make array of random numbers
var arraySize = 5000;
var array = [];

for (let i = 0; i < arraySize; i++) {
	array.push(Math.round(Math.random() * arraySize));
}
 

// done
 

 


console.time("dupe2");

// the above algorithm isn't very efficient, because we have a nested for loop, which is never ideal. how could we solve this same problem without putting a for loop inside another for loop? if done correctly, we should be able to significantly reduce the time complexity.

// hint: there's nothing wrong with having two loops, as long as one isn't INSIDE the other

 
let result = [];
let testarray =[1,2.3,4,5,5,5,6,6]
testarray.forEach(function(element, index) {
  
 
  if (testarray.indexOf(element, index + 1) > -1) {
		result.push(element)
 
	if (result.indexOf(element) === -1) {
	  result.push(element);
	}
  }
});
console.log(result)
console.timeEnd("dupe2");