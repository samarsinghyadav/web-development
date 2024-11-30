let gameNum = 25;
let userNum = prompt("guess the game number: ");
while (userNum != gameNum) {
  userNum = prompt("you entered wrong number, guess again: ");
}

console.log(" congratulation,you entered the right nmber");
