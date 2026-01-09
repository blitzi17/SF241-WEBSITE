// Function to open the Zoom Window
function openModal(imgSrc, title, desc) {
    const modal = document.getElementById('zoomModal');
    
    document.getElementById('modalImg').src = imgSrc;
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;
    
    modal.style.display = 'flex';
}

// Function to close the Zoom Window
function closeModal() {
    document.getElementById('zoomModal').style.display = 'none';
}

// Close modal if user clicks outside the content box
window.onclick = function(event) {
    const modal = document.getElementById('zoomModal');
    if (event.target == modal) {
        closeModal();
    }
}
