function openModal(imgSrc, title, desc) {
    document.getElementById('zoomModal').style.display = 'flex';
    document.getElementById('modalImg').src = imgSrc;
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;
}

function closeModal() {
    document.getElementById('zoomModal').style.display = 'none';
}

// Log to console to verify the file is linked
console.log("Website Script Loaded Successfully");
