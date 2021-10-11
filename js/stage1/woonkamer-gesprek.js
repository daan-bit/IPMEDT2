document.getElementById("js--typewriter").innerHTML = "";
let count = 0;
let text = '';
let naam = localStorage.getItem('naam');
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
        document.getElementById("js--typewriter").innerHTML += '<br>';
        switch (count) {
            case 0:
                text = 'Ik: Hey Sara, hoe gaat het? ';
                break;
            case 1:
                text = 'Sara: Ow hey ' + naam + ', ik had niet verwacht dat jij hier was maar alles gaat goed ';
                break;
            case 2:
                text = 'Ik: Ja James had mij uitgenodigd ';
                break;
            case 3:
                text = 'Sara: Ik wist niet dat jij James kende, hij is namelijk goede vriend van Laura ';
                break;
            case 4:
                text = 'Ik: wie is Laura? ';
                break;
            case 5:
                text = 'Sara: Zij geeft het feestje… ';
                break;
            case 6:
                text = 'Ik: Ai goeie, maar ik ga weer naar mijn vrienden toe. Laters ';
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
                window.location.href = "../Stage1/stage1-woonkamer.html";
            }, 800);
        }

    }
}

typeText(Array.from("Je loopt naar je kennissen toe en je begint te kletsen met Sara (zij zit ook bij jou op school in de klas 5 havo). Als jullie aan het praten zijn kom je erachter dat dit feest geven wordt door haar vriendin Laura."));

function skipText() {
    speed = 5;
}