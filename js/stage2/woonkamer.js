let room = document.getElementById("js--room-chooser");
const stage = document.getElementsByClassName("main-stage")[0];
const maxScroll = stage.scrollWidth; //pakt de max size van de img die je kan bewegen
let scroll;
let speed = 55;
const mediaQueryTelefoonGroot = window.matchMedia("(min-width: 548px)"); //media quary om de scroll aan te passen
const mediaQueryTablet = window.matchMedia("(min-width: 800px)");
const text = document.getElementById('js--typewriter').innerHTML; //pakt de tekst uit de p tag en gebruikt die om te typen,

stage.onscroll = function(event){
    scroll = stage.scrollLeft; //Pakt de scroll positie

    if (mediaQueryTablet.matches){
        if (scroll <= maxScroll*0.10){
            room.setAttribute("href", "../Stage2/stage2-toilet.html");
            room.innerHTML = "Toilet";
        }
        else if (scroll > maxScroll*0.10 && scroll < maxScroll*0.25){
            room.setAttribute("href", "../Stage2/stage2-woonkamer-gesprek.html");
            room.innerHTML = "Woonkamer";
        }
        else {
            room.setAttribute("href", "../Stage2/stage2-buiten.html");
            room.innerHTML = "Buiten";
        }
    }

    else if (mediaQueryTelefoonGroot.matches){
        if (scroll <= maxScroll*0.15){
            room.setAttribute("href", "../Stage2/stage2-toilet.html");
            room.innerHTML = "Toilet";
        }
        else if (scroll > maxScroll*0.15 && scroll < maxScroll*0.35){
            room.setAttribute("href", "../Stage2/stage2-woonkamer-gesprek.html");
            room.innerHTML = "Woonkamer";
        }
        else {
            room.setAttribute("href", "../Stage2/stage2-buiten.html");
            room.innerHTML = "Buiten";
        }
    }

    else {
        if (scroll <= maxScroll*0.25){
            room.setAttribute("href", "../Stage2/stage2-toilet.html");
            room.innerHTML = "Toilet";
        }
        else if (scroll > maxScroll*0.25 && scroll < maxScroll*0.50){
            room.setAttribute("href", "../Stage2/stage2-woonkamer-gesprek.html");
            room.innerHTML = "Woonkamer";
        }
        else {
            room.setAttribute("href", "../Stage2/stage2-buiten.html");
            room.innerHTML = "Buiten";
        }
    }
}

document.getElementById("js--typewriter").innerHTML = "";

typeText = (textToBeTyped) =>{
    if (textToBeTyped != ""){
        document.getElementById("js--typewriter").innerHTML += textToBeTyped[0];
        textToBeTyped.splice(0,1);
        setTimeout(() => {
            typeText(textToBeTyped);
        }, speed);
    }
}

typeText(Array.from(text));

/*Tekst speed*/

function skipText() {
    speed = 5;
}