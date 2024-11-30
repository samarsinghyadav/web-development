  
let random= Math.random()
console.log(random);
let a=prompt("enter the first value");
let b=prompt("enter operation ");
let c=prompt("enter the second value");

let obj={
    "+": "-",
    "*":"+",
    "-":"/",
    "/":"**",

}
 
if (random>0.1) {
    console.log(`the answer is ${a} ${b} ${c}`);
    alert(`the result is  ${eval(`${a} ${b} ${c}`)}`);
}
else{
    b=obj[b]
    alert(`the result is  ${eval(`${a} ${b} ${c}`)}`);
}
