/* --- HERO TYPEWRITER EFFECT --- */
const trigger = document.getElementById('frameTrigger');
const typewriter = document.getElementById('typewriter');
const textToType = "Welcome to my digital space! I am Karol Joy, a creator and innovator. Thank you for opening this scroll. Explore my journey and projects below...";

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
    if (isTyping && i < textToType.length) {
        typewriter.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typeEffect, 40);
    }
}
/* --- MUSIC PLAYER LOGIC (INSERTED HERE) --- */
const music = document.getElementById('bgMusic');
const playBtn = document.getElementById('playBtn');

if (playBtn) {
    playBtn.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            playBtn.innerText = "⏸ PAUSE";
            playBtn.classList.remove('pulsing'); // Stops the glowing pulse when playing
            playBtn.style.background = "#d4af37"; // Changes color to gold
        } else {
            music.pause();
            playBtn.innerText = "▶ PLAY";
            playBtn.classList.add('pulsing'); // Starts pulsing again when paused
            playBtn.style.background = "#2b1d10"; // Changes back to ink
        }
    });
}

/* --- GALLERY MODAL FUNCTIONS --- */
function openModal(imgSrc, title, desc) {
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');

    modalImg.src = imgSrc;
    modalTitle.innerText = title;
    modalDesc.innerText = desc;
    
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById('galleryModal').style.display = "none";
} 
function openHobbies() {
    openModal('../media/HOB.jpg', 'Hobbies', 'My hobbies are too many to count but i really love creating bouquets in different ways, i wish to create things that makes me happy.');
}

function openGoals() {
    // Make sure 'plane.jpg' matches your actual airplane file name
    openModal('../media/GOAL.jpg', 'Goals', 'I wish to create things that makes me happy and reach new heights in my creative journey.');
}

function openEducation() {
    // Make sure 'education.jpg' matches your actual portrait file name
    openModal('../media/EDUC.png', 'Education', 'Pursuing academic excellence and technical skills to build a professional future in digital arts.');
}

/* --- GLOBAL LISTENERS --- */
// Close modal when clicking outside the content box
window.onclick = function(event) {
    const modal = document.getElementById('galleryModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Close modal when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
});

/* --- TITLE REVEAL ANIMATION (STAGGERED BLUR) --- */

// 1. Select all elements with the 'reveal-text' class
const revealTitles = document.querySelectorAll('.reveal-text');

revealTitles.forEach(title => {
    // Get the original text from the HTML
    const text = title.textContent;
    // Clear the original text content
    title.textContent = ""; 
    
    // Split the text into individual characters and wrap each in a <span>
    [...text].forEach((char, i) => {
        const span = document.createElement('span');
        
        // Handle spaces so they don't disappear
        span.textContent = char === " " ? "\u00A0" : char; 
        
        // Add a staggered delay for each letter (0.07s wave)
        // This creates the "Hello, you!" timing
        span.style.transitionDelay = `${i * 0.07}s`; 
        
        title.append(span);
    });
});

// 2. Set up the Intersection Observer to trigger when titles come into view
const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add 'active' class to start the CSS transition
            entry.target.classList.add('active');
        } else {
            // Optional: Remove 'active' to re-animate when scrolling back up
            entry.target.classList.remove('active');
        }
    });
}, { 
    // Trigger when 50% of the title is visible on screen
    threshold: 0.5 
});

// Start observing each title
revealTitles.forEach(t => textObserver.observe(t));






