console.log("hello world");


 let age = 12;
  
 let grace =7;
 age+=grace


 console.log(age)


 console.log(age+grace)
 console.log(age-grace)
 console.log(age*grace)
 console.log(age/grace)
 console.log(age**grace)
 if (age=grace>18) {
    console.log("you can drive");
 }
 else {
    console.log("you cannot drive");
 }
// const age = 12; /*ye jo value hai ye constant ho chuki hai ye badal nhai sakti hai badlne ke liye hame var ka use karna paadega const ko replace karke */


if (age < 5) {
    console.log("you are baby")
}
else if (age > 10 && age < 15) {
    console.log("you are boy")
}
else if (age > 18) {
    console.log("you are adult")
}
let a = 2;
let b = 5; /*translate to:
 if (a>b){
 let c =a-b;
 }
 else{
 let c=a-b;} */
let c = a > b ? (a - b) : (b - a); //? is a tarnary operater yes matlb e kardo ,:=no means warna


