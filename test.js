//Test
//Q.1.. How do you find the missing number in a given integer array of 1 to 100?
//My Input
/* function missingNum(){
    var arr = [];
    for(let i = 0; i<100; i++){
        if(i==36){
            arr.push(0);
            continue;
        }else{
            arr.push(i+1);
        }
    }
    //My Logic
     let missing = [];
    for(let i = 0; i< arr.length; i++){
        if(arr.indexOf(i) == -1){
            missing.push(i);
            continue;
        }
    }
    if(missing.length > 0){
        for(let i =0; i< missing.length; i++){
            console.log(`Missing numbers are ${missing[i]}`);
        }
    }else{
        console.log("Not found");
    } 
    // Stack Overflow Logic
    let sum = 0;
    let indx = -1;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 0){
            indx = i;
        }else{
            sum += arr[i];
        }
    }
    let total = (arr.length + 1) * arr.length / 2;//main logic
    console.log(`missing number is ${total - sum} at index ${indx}`);
}
missingNum(); */

//Q2. How do you find the duplicate number on a given integer array?
/* var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];
var sorted_arr = arr.slice().sort(); // You can define the comparing function here. 
                                     // JS by default uses a crappy string compare.
                                     // (we use slice to clone the array so the
                                     // original array won't be modified)
var results = [];
for (var i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
}

console.log(results); */

// For String Array
const names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl']

const count = names =>
  names.reduce((a, b) => ({ ...a,
    [b]: (a[b] || 0) + 1
  }), {}) // don't forget to initialize the accumulator

const duplicates = dict =>
  Object.keys(dict).filter((a) => dict[a] > 1)

console.log(count(names)) // { Mike: 1, Matt: 1, Nancy: 2, Adam: 1, Jenny: 1, Carl: 1 }
console.log(duplicates(count(names))) // [ 'Nancy' ]

/* function duplicateNum(){
    var arr = [23,45,34,65,23,11,65]
    var i,
      len = arr.length,
      out = [],
      obj = {};

    for (i = 0; i < len; i++) {
        obj[arr[i]] = 0;
    }
    for (i in obj) {
        out.push(i);
    }
    return out;
}
var ret = duplicateNum();
console.log(`Repeted are ${ret}`) */