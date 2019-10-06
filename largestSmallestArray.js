var arr = [13, 45, 23, 9, 67,34, 89, 21, 134];
var smallest, highest;
//Using Reduce Method
smallest = arr.reduce((pre, next, index,arr)=>{
    return pre < next ? pre : next;
}, arr[0]);
highest = arr.reduce((pre, next, index,arr)=>{
    return pre < next ? next : pre;
}, arr[0])


//Using Spread operator
smallest = Math.min(...arr);
highest = Math.max(...arr);

//using slice and sort method

console.log(`smallest is ${smallest} and highest is ${highest}`);