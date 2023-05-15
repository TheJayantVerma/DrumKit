var drumButtons = document.querySelectorAll(".drum");

for (i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function() {
        buttonPressFX(this.textContent);
        playSoundFX(this.textContent);
    })
}

document.addEventListener("keydown", function(event) {
    buttonPressFX(event.key);
    playSoundFX(event.key);
})

function buttonPressFX(button) {
    document.querySelector("." + button).classList.add("button-shadow");
    setTimeout(() => {
        document.querySelector("." + button).classList.remove("button-shadow");
    }, 150);
}

function playSoundFX(key) {
    switch (key) {
        case 'w':
            var audioTom1 = new Audio("Sounds/tom-1.mp3");
            audioTom1.play();
            break;
        case 'a':
            var audioTom2 = new Audio("Sounds/tom-2.mp3");
            audioTom2.play();
            break;
        case 's':
            var audioTom3 = new Audio("Sounds/tom-3.mp3");
            audioTom3.play();
            break;
        case 'd':
            var audioTom4 = new Audio("Sounds/tom-4.mp3");
            audioTom4.play();
            break;
        case 'j':
            var audioCrash = new Audio("Sounds/crash.mp3");
            audioCrash.play();
            break;
        case 'k':
            var audioKickBass = new Audio("Sounds/kick-bass.mp3");
            audioKickBass.play();
            break;
        case 'l':
            var audioSnare = new Audio("Sounds/snare.mp3");
            audioSnare.play();
            break;    
        default:
            console.log(eventArg);
            break;
    }
}