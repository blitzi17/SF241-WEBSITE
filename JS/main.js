const trigger = document.getElementById('frameTrigger');
const typewriter = document.getElementById('typewriter');
const text = "Welcome to my digital gallery. I am Karol Joy, a creator passionate about innovation and digital aesthetics. Thank you for visiting.";

let i = 0;
let isTyping = false;

trigger.addEventListener('mouseenter', () => {
    isTyping = true;
    typewriter.innerHTML = "";
    i = 0;
    setTimeout(typeEffect, 600);
});

trigger.addEventListener('mouseleave', () => {
    isTyping = false;
    typewriter.innerHTML = "";
});

function typeEffect() {
    if (isTyping && i < text.length) {
        typewriter.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 40);
    }
}
