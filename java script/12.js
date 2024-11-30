let boxes = document.getElementsByClassName("box");
console.log(boxes);

// boxes[0].style.color = "yellow";
// boxes[1].style.color = "red";
// boxes[2].style.color = "black";
// boxes[3].style.color = "blue";
// boxes[4].style.color = "beige";

// document.getElementById("box0").style.backgroundColor="red"
// document.getElementById("box1").style.backgroundColor="green"
// document.getElementById("box2").style.backgroundColor="yellow"
// document.getElementById("box3").style.backgroundColor="brown"
// document.getElementById("box4").style.backgroundColor="violet"

function getRandomColor() {
  /* math.random generate no.2.55 then floor minimize get (2) and ceil maximize 3 */
  let val1 = Math.floor(/*floor or use ceil*/ 0 + Math.random() * 255);
  let val2 = Math.floor(/*floor or use ceil*/ 0 + Math.random() * 255);
  let val3 = Math.floor(/*floor or use ceil*/ 0 + Math.random() * 255);
  return `rgb(${val1},${val2},${val3})`;
}
Array.from(boxes).forEach((e) => {
  e.style.backgroundColor = getRandomColor();
  e.style.color = getRandomColor();
});
