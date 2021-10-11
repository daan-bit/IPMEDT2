let naam = localStorage.getItem('naam');
let name = document.getElementById("js--naam");
console.log(naam);
name.innerHTML = "Hallo, " + naam;

const transitionOverlayIntro = document.getElementsByClassName("transitionOverlayIntro")[0];


document.getElementById('js--bluePill').onclick = function(event){
    transitionOverlayIntro.style.backgroundColor = "#0066ff";
    transitionOverlayIntro.style.height = "300vh"; // als 20% maakt, dan kan eventueel een navigatie maken
    setTimeout(function(){
        window.location = "Stage0/stage0-begin.html";
    },750);
}

document.getElementById('js--redPill').onclick = function(event){
    transitionOverlayIntro.style.backgroundColor = "#ff0066";
    transitionOverlayIntro.style.height = "300vh"; // als 20% maakt, dan kan eventueel een navigatie maken
    setTimeout(function(){
        window.location = "eind-pagina.html";
    },750);
}