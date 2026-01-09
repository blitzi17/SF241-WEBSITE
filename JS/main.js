const trigger = document.getElementById('frameTrigger');
const typewriter = document.getElementById('typewriter');
const text = "Welcome to my digital space! I am Karol Joy. This is my journey in innovation. Explore and enjoy.";

let i = 0;
let isTyping = false;

trigger.addEventListener('mouseenter', () => {
    if (!isTyping) {
        isTyping = true;
        typewriter.innerHTML = "";
        i = 0;
        setTimeout(typeEffect, 600); // Start typing after the slide starts
    }
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
