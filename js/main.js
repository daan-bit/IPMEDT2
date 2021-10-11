let input = document.getElementById("js--input");
let inputValue;

const button = document.getElementById("js--button");
const transitionOverlay = document.getElementsByClassName("transitionOverlay")[0];

input.addEventListener("keyup", (event) => {
  if (event.keyCode == 13) {
    event.preventDefault();
    button.click();
  }
});

button.onclick = function(event){
  inputValue = document.getElementById("js--input").value;
  localStorage.setItem("naam", inputValue);
  transitionOverlay.style.width = "100%"; // als 20% maakt, dan kan eventueel een navigatie maken
  setTimeout(function(){
  window.location = "introductie.html";
  },750);
}
