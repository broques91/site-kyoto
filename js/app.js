const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.nav-list');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active')
});

const navLinks = document.querySelectorAll('.nav-item');

navLinks.forEach((item) => {

    item.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
    
});