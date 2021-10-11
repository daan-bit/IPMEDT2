document.getElementById("js--typewriter").innerHTML = "";
document.getElementById("js--ja");
ja = document.getElementsByClassName("main-stage__button-container__keuze-button")[0];
nee = document.getElementsByClassName("main-stage__button-container__keuze-button")[1];
ja.disabled = true;
nee.disabled = true;
let gerookt = false;
let speed = 55;

typeText = (textToBeTyped) =>{
    if (textToBeTyped != ""){
        document.getElementById("js--typewriter").innerHTML += textToBeTyped[0];
        textToBeTyped.splice(0,1);
        setTimeout(() => {
            typeText(textToBeTyped);
        }, speed);
    }
    else {
        if (gerookt){
            setTimeout(() => {
                window.location.href = "../Stage2/stage2-woonkamer.html";
            }, 800);
        }
        else {
            ja.style.opacity = 1;
            nee.style.opacity = 1;
            ja.disabled = false;
            nee.disabled = false;
        }
    }
}
function roken(){
    ja.style.opacity = 0;
    nee.style.opacity = 0;
    typeText(Array.from( " Na een tijdje pakt James een zakje met pilletjes uit zijn jas. Iedereen pakt een pilletje aan, door de groepsdruk pak jij ook een pilletje. Je neemt het pilletje en gaat weer naar binnen."));
    gerookt = true;

}

typeText(Array.from("Je loopt naar buiten en je ziet James en de rest, een paar zijn aan het roken. Als je naar ze toe loopt vraagt James of je ook een peukje wilt."));

function skipText() {
    speed = 5;
}