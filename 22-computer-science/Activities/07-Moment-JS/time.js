const moment = require("moment");

// benchmark getting the date from one week ago
console.time("moment");

console.log(moment().subtract(1, 'week').format("M/DD/YYYY"));
//how many days you wanna go back

 
console.timeEnd("moment");


// benchmark getting last week's date with regular js date object
console.time("jsdate");
var days = 7

var dayCOnvert =  days * 1440
var currentDate = Date.now()
var diff = currentDate - dayCOnvert
console.log(diff)
// er... how would we do that, though?

// reference https://www.w3schools.com/jsref/jsref_obj_date.asp for help

console.timeEnd("jsdate");

