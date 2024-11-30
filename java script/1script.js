var a = 5; //var are globlly scoped data types
let b = 4;
let c = "samar";
let _a = "manu";
// var 55a="hey"//not allowed
console.log(a + b + 8);
console.log(typeof a, typeof b, typeof c);
//const a1=7;
//a1=a1+3; //not allowed because a1 is const value

{
  let b = 55;

  console.log(b); //let are block scoped data types
}
console.log(b);
let x = "samar yadav";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;
console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

let profile={
    name:"samar yadav",
   "job code": 1200,
   "is_handsome":true,

}
console.log(profile);
profile.salary="15lakhs";
console.log(profile);
profile.salary="1.20crores";
console.log(profile)