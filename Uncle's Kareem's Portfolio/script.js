function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
  
    lightboxImg.src = img.src; // Set the clicked image's source to the lightbox image
    lightbox.style.display = 'flex'; // Show the lightbox
  }
  
  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Hide the lightbox
  }