// Función para alternar la disponibilidad de las casillas
function toggleDisponibilidad(element) {
    if (element.classList.contains('selected')) {
        element.classList.remove('selected');  // Si ya estaba no disponible, la hacemos disponible
        showModal("Su clase se ha cancelado exitosamente");
    } else {
        element.classList.add('selected');  // La hacemos no disponible
        showModal("Hora seleccionada correctamente");
    }
}

// Función para mostrar el modal
function showModal(message) {
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");

    modalMessage.textContent = message;
    modal.style.display = "flex";

    // Ocultar el modal después de 3 segundos
    setTimeout(() => {
        modal.style.display = "none";
    }, 5000);
}

// Función para cerrar el modal manualmente
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

