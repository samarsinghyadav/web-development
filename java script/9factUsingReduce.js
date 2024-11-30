 
// // usingloops
// function factorialUsingLoop(n) {
//     if (n < 0) return undefined; // Factorial is not defined for negative numbers
//     if (n == 0) return 1; // 0! is 1

//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i; // Multiply result by current number
//     }
//     return result;
// }

 
// console.log(factorialUsingLoop(5)); 

// usingreduce
let a=6
function factorial(number){
    let arr=Array.from(Array(number+1).keys() )
 let c=arr.slice(1,).reduce((a,b)=>a*b)
    return c;
}
factorial(a)