// use map ,filter reduce in array;
//simple for
// let arr=[1,4,3,6,8];
// let newarr=[];
// for (let index = 0; index < arr.length; index++) {
//     const element =  arr[index];
//     newarr.push(element**2);

// }
// console.log(newarr);
// map use original array ka use karke ek new array generate karna
//and now use map
let array = [2, 4, 6, 8, 23, 56];
let newarr = array.map((e) => {
  return e ** 2;
});
console.log(newarr);

//now use filter
let arry = [9, 8, 6, 5, 3];
const greterthan5 = (e) => {
  if (e > 5) {
    return true;
  }
  return false;
}
console.log(arry.filter(greterthan5));


//reduce use
let arr2 =[2,3,4,5,6];
const red=(a,b)=>{
    // return a*b;or
    return a+b;
}
console.log(arr2.reduce(red));
