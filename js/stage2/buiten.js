document.getElementById("js--typewriter").innerHTML = "";
document.getElementById("js--ja");
let naam = localStorage.getItem('naam');
let speed = 55;
let text = document.getElementById('js--typewriter').innerHTML;
let count = 0;

typeText = (textToBeTyped) => {
    if (textToBeTyped != "") {
        document.getElementById("js--typewriter").innerHTML += textToBeTyped[0];
        textToBeTyped.splice(0, 1);
        setTimeout(() => {
            typeText(textToBeTyped);
        }, speed);
    }
    else {
        document.getElementById("js--typewriter").innerHTML += '<br>';
        switch (count) {
            case 0:
                text = 'Sara: Hey, ' + naam;
                break;
            case 1:
                text = 'Sara: dit is Laura, de persoon die dit feestje geeft';
                break;
            case 2:
                text = 'Laura: Hey, leuk je te ontmoeten';
                break;
            case 3:
                text = 'Ik: Same dus hoe ken jij James eigenlijk?';
                break;
            case 4:
                text = 'We hadden elkaar op een feestje ontmoet en we waren een beetje dronken en toen stond hij opeens in mijn contacten.';
                break;
            default:
                text = '';
                break;
        }
        count = count + 1;
        if (count == 1){
            setTimeout(() => {
                document.getElementById('js--typewriter').innerHTML = '';
                typeText(Array.from(text));
            }, 800);
        }
        else if (count <= 6){
            typeText(Array.from(text));
        }
        else {
            setTimeout(() => {
                window.location.href = "../Stage2/stage2-woonkamer.html";
            }, 800);
        }
    }
}

typeText(Array.from(text));

function skipText() {
    speed = 5;
}