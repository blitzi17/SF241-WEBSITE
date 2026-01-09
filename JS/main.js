const trigger = document.getElementById('frameTrigger');
const typewriter = document.getElementById('typewriter');
const textToType = "Welcome to my digital space! I am a passionate innovator dedicated to pushing the boundaries of what is possible in design and code...";

let i = 0;
let isTyping = false;

trigger.addEventListener('mouseenter', () => {
    isTyping = true;
    i = 0;
    typewriter.innerHTML = "";
    typeEffect();
});

trigger.addEventListener('mouseleave', () => {
    isTyping = false;
    typewriter.innerHTML = ""; // Clears text on exit
});

function typeEffect() {
    if (isTyping && i < textToType.length) {
        typewriter.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typeEffect, 40); // Controls typing speed
    }
}
