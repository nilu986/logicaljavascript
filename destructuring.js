//The destructuring assignment syntax is a JavaScript expression 
//that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.


//Array Destructuring

/* var data = ["Qb", "PB", "JP", 1, 5, "DP"];
[x,y, ...ncr] = data;
//console.log(ncr);
function testDestruct([d1, d2, d3, ...d4]){
    console.log(d1);
    console.log(d2);
    console.log(d4);
}
testDestruct(data); */

/* function test(z){
    return z;
}
let t = [12,34,54]
var [x,y, [,,m]] = test([5,7, [23, 43,53]]);
console.log(m); */

// Object Destructuring
var obj = {
    name : "XYZ",
    bay: 2,
    com: "NCR"
}
var {name:x = "TWP", com:z = "LB"} = obj;
console.log(z);