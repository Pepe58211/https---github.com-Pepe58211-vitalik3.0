document.getElementById("cancelarSubscripcion").addEventListener("click", function (e) {
    e.preventDefault();
    
    // Mostrar la ventana flotante
    document.getElementById("ventanaFlotante").style.display = "block";
    document.getElementById("fondoOscuro").style.display = "block";
    
    // Cerrar la ventana flotante después de 5 segundos
    setTimeout(function () {
        document.getElementById("ventanaFlotante").style.display = "none";
        document.getElementById("fondoOscuro").style.display = "none";
        window.location.href = "index.html";  // Redirige a la página de inicio
    }, 3000);
});

