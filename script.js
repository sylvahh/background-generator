var css = document.getElementById("textContent");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("background");
var generate = document.getElementById("generate");

// defualt background
body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
printBgText();

// background set
function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  printBgText();
}

// css printout
function printBgText() {
  css.textContent = body.style.background + ";";
}

// auto generate function
function autoGenerate() {
  color1.value = "#" + (Math.floor(Math.random() * (1000000 - 111111)) + 111111);
  color2.value = "#" + (Math.floor(Math.random() * (1000000 - 111111)) + 111111);
  setGradient();
}

// event listeners
generate.addEventListener("click", autoGenerate);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
