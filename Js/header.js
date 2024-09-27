const headerMenu = document.querySelector('.hm-header');
const menu = document.querySelector('.icon-menu button'); // Cambiado el selector al botón dentro de .icon-menu
const menuClose = document.querySelector('.cerrar-menu');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 80) {
        headerMenu.classList.add('header-fixed');
    } else {
        headerMenu.classList.remove('header-fixed');
    }
});

menu.addEventListener('click', () => {
    document.querySelector('.header-menu-movil').classList.add('active');
});

menuClose.addEventListener('click', () => {
    document.querySelector('.header-menu-movil').classList.remove('active');
});
