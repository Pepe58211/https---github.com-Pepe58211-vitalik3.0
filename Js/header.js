// Selección de elementos clave del DOM
const headerMenu = document.querySelector('.hm-header');
const menuButton = document.querySelector('.icon-menu button'); // Cambié la variable a menuButton para mayor claridad
const menuClose = document.querySelector('.cerrar-menu');
const mobileMenu = document.querySelector('.header-menu-movil');

// Añadir o quitar clase 'header-fixed' cuando se hace scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 80) {
        headerMenu.classList.add('header-fixed');
    } else {
        headerMenu.classList.remove('header-fixed'); 
    }
});

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
        document.body.style.overflow = 'auto'; // Restaura el scroll cuando se cierra el menú
    }
});

// Evitar que el menú se cierre al hacer clic dentro del menú móvil
mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation(); // Previene que el evento de cierre se propague cuando se hace clic dentro del menú
});
