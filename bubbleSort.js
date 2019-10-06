//Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
let array = [23, 45,12, 38, 87,56, 23, 92, 899, 33, 12];
 const sortingReducer = (accumulator, value) => {
    const nextIndex = accumulator.findIndex(i => value < i );
    const index = nextIndex > -1 ? nextIndex : accumulator.length;
    accumulator.splice(index, 0, value);
    return accumulator;
  }
console.log(array.reduce(sortingReducer, []));





/* console.log(array.sort((a,b)=>{
     let x =a-b;
     return x;
})); */