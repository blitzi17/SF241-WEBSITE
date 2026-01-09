/**
 * Function to Open the Zoom Modal
 * @param {string} imgSrc - Path to the image
 * @param {string} title - Title of the project
 * @param {string} desc - Detailed description
 */
function openModal(imgSrc, title, desc) {
    const modal = document.getElementById('zoomModal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');

    // Set the content
    modalImg.src = imgSrc;
    modalTitle.innerText = title;
    modalDesc.innerText = desc;

    // Show the modal
    modal.style.display = 'flex';
    
    // Disable scrolling on background
    document.body.style.overflow = 'hidden';
}

/**
 * Function to Close the Modal
 */
function closeModal() {
    const modal = document.getElementById('zoomModal');
    modal.style.display = 'none';
    
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
}

/**
 * Guestbook Form Handling
 */
document.getElementById('guestbookForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the name from the first input
    const userName = this.querySelector('input[type="text"]').value;
    
    alert(`Thank you, ${userName}! Your message has been sent to Karol's guestbook.`);
    
    // Clear the form
    this.reset();
});

// Verify connection
console.log("Karol's Portfolio Script: Active and Loaded.");
