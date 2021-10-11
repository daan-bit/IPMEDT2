document.getElementById("js--typewriter").innerHTML = "";
let naam = localStorage.getItem('naam');
let speed = 55;
let text = document.getElementById('js--typewriter').innerHTML;
let count = 0;
const bg = document.getElementsByClassName('main-stage__bg-img')[0];
const stoned = document.getElementsByClassName('main-stage__bg-img--colors')[0];
stoned.style.animationName = 'none';

typeText = (textToBeTyped) =>{
    if (textToBeTyped != ""){
        document.getElementById("js--typewriter").innerHTML += textToBeTyped[0];
        textToBeTyped.splice(0,1);
        setTimeout(() => {
            typeText(textToBeTyped);
        }, speed);
    }
    else {
        document.getElementById("js--typewriter").innerHTML += '<br>';
        switch (count) {
            case 0:
                text = 'Je hebt weer wat te drinken gepakt en je loopt naar de groep toe. Je begint te praten met Patrick';
                break;
            case 1:
                text = 'Patrick: jo, ik ben Patrick ik zit in MAVO 4.';
                break;
            case 2:
                text = 'Ik: waddup ik ben ' + naam;
                break;
            case 3:
                text = 'Patrick: Dus hoe ken jij Laura?';
                break;
            case 4:
                text = 'ik ken her eigenlijk niet James nodigde mij uit';
                break;
            case 5:
                text = 'Patrick: Ai goeie, ik ga naar buiten smoken ga je mee?';
                break;
            case 6:
                text = 'Ik: prima';
                break;
            case 7:
                bg.src = '../img/kamers/buiten/buiten-1920.webp';
                text = 'Als jullie naar buiten gaan pakt Patrick 2 joints en geeft jou er een.';
                break;
            case 8:
                text = 'Patrick: here you go';
                break;
            case 9:
                text = 'Ik: voordat je belachelijk gaat maken het is al een tijdje sinds ik gesmoked heb, *kuch* *kuch*';
                break;
            case 10:
                text = 'Patrick: hahaha';
                break;
            case 11:
                bg.src = '../img/kamers/buiten/avond-1920.webp';
                document.getElementsByClassName('main-stage__text-container')[0].style.display = 'none';
                stoned.style.animationName = 'colors';
                text = 'Na een tijdje gaan jullie liggen en naar de sterren kijken';
                break;
            default:
                text = '';
                break;
        }
        count = count + 1;
        if (count == 2){
            setTimeout(() => {
                document.getElementById('js--typewriter').innerHTML = '';
                typeText(Array.from(text));
            }, 800);
        }
        else if (count ==8){
            setTimeout(() => {
                document.getElementById('js--typewriter').innerHTML = '';
                typeText(Array.from(text));
            }, 800);
        }
        else if (count <= 11){
            typeText(Array.from(text));
        }
        else {

            setTimeout(() => {
                window.location.href = "../Stage3/stage3-woonkamer.html";
            }, 5000);
        }

    }
}

typeText(Array.from(text));

function skipText() {
    speed = 5;
}