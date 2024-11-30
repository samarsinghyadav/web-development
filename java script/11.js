// console.log("samar");

// let boxes=document.getElementsByClassName("box")
// console.log(boxes);
// //ye second index box name class me red karega;
//   boxes[2].style.backgroundColor="red";

// // given id
// // id ek specific element ko target karta hai
// document.getElementById("colorbox").style.backgroundColor="blue";

// // pahala selector match then aply
// document. querySelector(".box").style.backgroundColor="blue";

console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach((e) => {
  e.style.backgroundColor = "yellow";
});



//this code pull console for understand me
/*e = document.getElementsByTagName("div");

e[2].matches("#colorbox");
true;
e[2].matches(" box");
false;

document.querySelector(".container").contains(document.querySelector("body"));
false;
document.querySelector("html").contains(document.querySelector("body"));
true;
document.querySelector(" body").contains(document.querySelector("html"));
false;
*/