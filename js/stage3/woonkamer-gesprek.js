document.getElementById("js--typewriter").innerHTML = "";
let naam = localStorage.getItem('naam');
let speed = 55;
let text = document.getElementById('js--typewriter').innerHTML;
let count = 0;
const bg = document.getElementsByClassName('main-stage__bg-img')[0];
const stoned = document.getElementsByClassName('main-stage__bg-img--colors')[0];

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
                text = 'Je gaat naar James toe.';
                break;
            case 1:
                text = 'Ik: hey James hoe gaat het?';
                break;
            case 2:
                text = 'James: Het gaat prima het pilletje begint nu een beetje te werken';
                break;
            case 3:
                text = 'Ik: Ja ik begin het ook al te voelen.';
                break;
            case 4:
                text = 'Je begint je opeens wat minder lekker te voelen de felle kleuren worden nu donker';
                stoned.style.animationName = 'colors-sad';
                console.log(stoned.animationName);
                break;
            case 5:
                text = 'James merkt dat je opeens bleek wordt';
                break;
            case 6:
                text = 'Hij brengt je snel naar de WC';
                break;
            case 7:
                bg.src = '../img/kamers/toilet/toilet-1920.webp';
                text = 'Hij geeft je een glas water en een pilletje';
                break;
            case 8:
                text = 'James: neem het pilletje in met het water en dan voel je zo weer beter.';
                break;
            case 9:
                text = 'Je neemt het pilletje in en drink het water op';
                break;
            default:
                text = '';
                break;
        }
        count = count + 1;
        if (count == 8){
            setTimeout(() => {
                document.getElementById('js--typewriter').innerHTML = '';
                typeText(Array.from(text));
            }, 800);
        }
        else if (count <= 9){
            typeText(Array.from(text));
        }
        else {

            setTimeout(() => {
                window.location.href = "../Stage4/stage4-woonkamer.html";
            }, 2000);
        }

    }
}

typeText(Array.from(text));

function skipText() {
    speed = 5;
}