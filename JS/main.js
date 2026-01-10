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

// Function to handle the Scroll Reveal for Hands
const observerOptions = {
    threshold: 0.5 // Triggers when 50% of the section is visible
};

const handsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const hands = document.getElementById('handsTrigger');
        const title = document.querySelector('.gallery-title');

        if (entry.isIntersecting) {
            // SCROLL DOWN: Open hands and pop up title
            hands.classList.add('active');
            title.classList.add('active');
        } else {
            // SCROLL UP: Close hands and hide title
            hands.classList.remove('active');
            title.classList.remove('active');
        }
    });
}, observerOptions);

// Start watching the container
handsObserver.observe(document.querySelector('.hands-section-container'));



