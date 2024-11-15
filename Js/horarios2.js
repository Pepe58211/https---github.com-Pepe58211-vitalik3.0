// Abre el modal y coloca la imagen clickeada
function openImageModal(imageSrc) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = imageSrc;
}

// Cierra el modal
function closeImageModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

