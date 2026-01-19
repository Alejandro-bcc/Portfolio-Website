const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.nav__link');

const languageButton = document.querySelector('.language-button');
const languageMenu = document.querySelector('.language-menu');


menuButton.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuButton.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuButton.classList.toggle('active');
    });
});

document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuButton.contains(e.target)) {
        nav.classList.remove('active');
        menuButton.classList.remove('active');
    }
});

languageButton.addEventListener('click', (e) => {
    e.stopPropagation();
    languageMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!languageMenu.contains(e.target) && !languageButton.contains(e.target)) {
        languageMenu.classList.remove('active');
    }
});