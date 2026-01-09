const trigger = document.getElementById('frameTrigger');
const typewriter = document.getElementById('typewriter');
const textToType = "Welcome to my digital space! I am Karol Joy. This is my journey in digital creation and innovation. Explore my projects and get to know the mind behind the frame.";

let i = 0;
let isTyping = false;

trigger.addEventListener('mouseenter', () => {
    isTyping = true;
    i = 0;
    typewriter.innerHTML = "";
    setTimeout(typeEffect, 500); // Wait for the slide to finish
});

trigger.addEventListener('mouseleave', () => {
    isTyping = false;
    typewriter.innerHTML = "";
});

function typeEffect() {
    if (isTyping && i < textToType.length) {
        typewriter.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typeEffect, 40);
    }
}
