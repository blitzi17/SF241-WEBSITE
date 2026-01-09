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
