document.getElementById("js--typewriter").innerHTML = "";
let naam = localStorage.getItem('naam');
let speed = 55;
let text = document.getElementById('js--typewriter').innerHTML;
let count = 0;
const bg = document.getElementsByClassName('main-stage__bg-img')[0];
const transitionOverlayIntro = document.getElementsByClassName("transitionOverlayIntro")[0];

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
                text = 'Na een tijdje kom je weer in de woonkamer';
                break;
            case 1:
                text = 'James komt gelijk naar je toe en vraagt hoe het met je gaat?';
                break;
            case 2:
                text = 'Ik: Ja het gaat alweer';
                break;
            case 3:
                text = 'James: dat is goed om te horen.';
                break;
            case 4:
                text = 'Je merkt op dat iedereen naar jullie aan het kijken is';
                break;
            case 5:
                text = 'Opeens hoor je mensen allemaal fluisteren en dingen over jouw aan het zeggen zijn';
                break;
            case 6:
                text = 'Opeens kijkt iedereen je raar aan';
                break;
            case 7:
                text = 'James praat met wat andere mensen en je hoort hem zeggen “Ja ik weet ook niet waarom ik die gozer uitgenodigd heb hoor”';
                break;
            case 8:
                text = 'Patrick: Ey man wat is er mis met je?';
                break;
            case 9:
                text = 'Ik: sorry het spijt me';
                break;
            case 10:
                bg.src = '../img/kamers/buiten/avond-1920.webp';
                text = 'Je gaat buiten om even weg te zijn van al die mensen';
                break;
            case 11:
                text = 'Je ligt op de grond en kijkt weer naar de sterren boven je';
                break;
            case 12:
                text = 'Maar de lucht is niet meer mooi er is helemaal niks het is gewoon zwart';
                break;
            default:
                text = '';
                break;
        }
        count = count + 1;
        if (count == 5 || count == 9){
            setTimeout(() => {
                document.getElementById('js--typewriter').innerHTML = '';
                typeText(Array.from(text));
            }, 800);
        }
        else if (count <= 12){
            typeText(Array.from(text));
        }
        else {
            transitionOverlayIntro.style.height = "300vh"; // als 20% maakt, dan kan eventueel een navigatie maken
            setTimeout(function(){
                window.location = "../eind-pagina.html";
            },4000);
        }

    }
}

typeText(Array.from(text));

function skipText() {
    speed = 5;
}