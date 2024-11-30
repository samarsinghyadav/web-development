let a=prompt("enter a first number");
let b=prompt("enter a second number")
let sum=parseInt(a)+parseInt(b);//string ko integer me convert ke liye parseInt use kiya jata hai
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("sorry, this is not a number,please enter a number");//custom error generate karne ke liye throw ka use generate by programmer 
     
    
}
// console.log("the sum of two no",sum);
function main(){


try{
    console.log("the sum is ",sum*x);//try karo ye run hua to thik hai varna error ko catch karlo
    return true;
}
catch(error){
console.log("error aa gya bhai")
return false;

}
finally{
    console.log("files are being closed")
}
}
let c=main();
console.log(c);
