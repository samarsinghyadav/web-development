let a = "Samar";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// apne charater ki length ke liye//
console.log(a.length);
// template lateral using backtics(``)
let realName = "samar";
let friend = "himanshu";
console.log(`his name is ${realName} and his friend name is ${friend}`);
// normal adding variable in console.log
console.log("his name is " + realName + " and his friend name is " + friend);
//variable ki value ko captial me karne ke liye
let name = "samar";
console.log(name.toUpperCase());
// using slice  (a,b) maine passkiya to character a index se b index tak charater printkar dega b not include
console.log(name.slice(1, 4));
//repalace keliye
console.log(name.replace("sa","A"));
// kis variavble ke value me koi aur value add karna
console.log(name.concat(friend,"rahul"));