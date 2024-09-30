// Selección de elementos clave del DOM
const menuButton = document.querySelector('.icon-menu button');
const menuClose = document.querySelector('.cerrar-menu');
const mobileMenu = document.querySelector('.header-menu-movil');

// Abrir menú móvil al hacer clic en el icono del menú
menuButton.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden'; // Deshabilita el scroll de fondo cuando el menú está abierto
});

// Cerrar menú móvil al hacer clic en el botón de cerrar
menuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restaura el scroll del cuerpo cuando se cierra el menú
});

// Cerrar el menú móvil al hacer clic fuera del área del menú
window.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Evitar que el menú se cierre al hacer clic dentro del menú móvil
mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation();
});
