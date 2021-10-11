const text = document.getElementById('js--typewriter').innerHTML; //pakt de tekst uit de p tag en gebruikt die om te typen,
document.getElementById("js--typewriter").innerHTML = "";         //dit zorgt ervoor dat we deze code makkelijker kun herbruiken.
let speed = 55;

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

function skipText() {
    speed = 5;
}