//About Rest Parameter
//Rest parameter: collects all remaining elements into an array.
//When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
//Rest parameters are used to create functions that accept any number of arguments.
/* function sumAll(...args) { // args is the name for the array
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
console.log(sumAll(12,34,56)); */

/* function sumAll(x, y, z, ...args) {// non-sense code if we pass in middle as (x,...args, y, z)
    let sum = x+y+z;
    for(i of args) sum += i;
    return sum; 
}
console.log(sumAll("Anil","Yadav",14,23,34,9)) */


/* We’ve just seen how to get an array from the list of parameters.

But sometimes we need to do exactly the reverse.
Now let’s say we have an array [3, 5, 1]. How do we call Math.max with it?

Passing it “as is” won’t work, because Math.max expects a list of numeric arguments, not a single array:
alert( Math.max(3, 5, 1) );  */

// About Spread Operator
//Spread operator: allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements. 
//When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.
//The spread operator is used to pass an array to functions that normally require a list of many arguments.
let obj1 = {age:12, money: 23, name: 'Anil', lname: 'yadav'}//[12, 34,21, 9 ,56]
let obj2 = {age1:14, money1: 34, name1: 'Neeraj', lname1:'Kumari'}

var obj3 = Object.assign(obj1,obj2);//{...obj1, ...obj2};
console.log(obj3);