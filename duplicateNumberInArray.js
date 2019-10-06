/* var x = [12, 34, 45, 12, 46, 34];
var repeat = x.reduce( function(pre, next, index, arr) {
    if(arr.indexOf(next) !== index && pre.indexOf(next) < 0){
         pre.push(next);
         
    }
    return pre;
},[] )
if(repeat && repeat.length >0 ){
    var [x, y] = repeat;
    console.log(y);
} */

/* var arr = [13,45,65,13, 89, 43,13,15,45,13];
var repeated = arr.reduce((pre, next, index, arr)=>{
    if(arr.indexOf(next) !== index && pre.indexOf(next) < 0){
        pre.push(next);
    }
    return pre;
},[]);
var [x,...y] = repeated;
console.log(y); */

// Remove duplicate entries from Array
var arr = ["XYZ", 12, "ZYX", 36, "XYZ", "ASD", 12];
var withoutDuplicate = arr.reduce((pre, next, index, arr1)=>{
    if(arr1.indexOf(next) == index){
        pre.push(next);
        
    }
    //console.log(arr1);
    return arr1;
}, [])
console.log(withoutDuplicate);
//console.log(arr);