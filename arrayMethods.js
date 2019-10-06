//Reduce Method -
//The array reduce() method in JavaScript is used to reduce the array to a single value 
//and executes a provided function for each value of the array (from left-to-right) 
//and the return value of the function is stored in an accumulator.

//array.reduce( function(total or prev, currentValue or next, currentIndex or nextIndex(optional), 
//arr(optional used to specify the array object the next elements belongs to)), 
//initialValue (used to specify the value to be passed to the function as the initial value) )

var input = [1, 2, 3, 1, 3, 1];

var duplicates = input.reduce(function(acc, el, i, arr) {
  if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
}, []);

console.log(duplicates);

//Slice ( )
//Copies elements from an array
//Returns them as a new array
//Doesn’t change the original array
//Starts slicing from … until given index: array.slice (from, until)
//Slice doesn’t include “until” index parameter
//Can be used both for arrays and strings

/* let array = [1, 2, 3, "hello world", 4.12, true];
let copiedArray = array.slice(0);
console.log(array);
console.log(copiedArray); */

// Splice ( )
//Used for adding/removing elements from array
//Returns an array of removed elements
//Changes the array
//For adding elements: array.splice (index, number of elements, element)
//For removing elements: array.splice (index, number of elements)
//Can only be used for arrays

/* let array = [1, 2, 3, "hello world", 4.12, true];
//let removedArray = array.splice(0);// Every element starting from index 0, will be removed
let removedAndAddArray = array.splice(1, 2, "2 and 3 removed and 4 is added", 4);
console.log(array);
console.log(removedAndAddArray); */

// Split ( )
//Divides a string into substrings
//Returns them in an array
//Takes 2 parameters, both are optional: string.split(separator, limit)
//Doesn’t change the original string
//Can only be used for strings */

let array = [1, 2, 3, "hello world", 4.12, true];
let myString = array.toString();
//let newArray = myString.split(",", 3);
let newArray = myString.split("");// each character of the string will be divided as substrings
console.log(myString);
console.log(newArray);