let a = 1;
for (let i = 0; i < 20; i++) {
  console.log(a + i);
}
let profile = {
  name: "samar singh yadav",
  study: "hewett polytechnic",
  role: "programmer",
};
for (const key in profile) {
  // const element = profile[key];

  console.log(key);
}
for (const a of "samar") {
  console.log(a);
}

// let i = 1;
// while (i <= 6) {
//   console.log(i);
//   i++;
// }


let i=1;
do {
    console.log(i) //i =20 se jyada value enter kar de to ye loop ek bR CHlegA yahi isme dikkat hai so this is not use mostly
    i++;
    
} while (i<20);
 
