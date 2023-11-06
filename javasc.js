var randomvariable = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomvariable + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);
var randomvariable2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomvariable2 + ".png";
var image2 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomDiceImage2);
if (randomvariable > randomvariable2) {
  document.querySelector("h1").innerHTML = "!palyer 1 wins";
} else if (randomvariable < randomvariable2) {
  document.querySelector("h1").innerHTML = "!palyer 2 win ";
} else {
  document.querySelector("h1").innerHTML = "draw";
}
