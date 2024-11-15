document.getElementById("finalizarCompra").addEventListener("click", function(event) {
    event.preventDefault();  // Evita que el enlace redirija inmediatamente

    // Muestra la ventana flotante y el fondo oscuro
    var ventana = document.getElementById("ventanaFlotante");
    var fondo = document.getElementById("fondoOscuro");
    ventana.style.display = "block";
    fondo.style.display = "block";

    // Cierra la ventana flotante y redirige después de 5 segundos
    setTimeout(function() {
        ventana.style.display = "none";
        fondo.style.display = "none";
        window.location.href = "index_post.html";  // Redirige a la página de inicio
    }, 5000);
});

