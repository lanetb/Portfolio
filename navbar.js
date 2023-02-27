const nav = document.querySelector('nav');
const toggle = document.querySelector('.toggle-btn');
const toggleIcon = document.querySelector('.toggle-btn i');
const dropDown = document.querySelector('.drop-down');
const drawLogo = document.querySelector('.name-mini');
const spacer = document.querySelector('.spacer');

window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
        nav.classList.add('nav-scroll');
        dropDown.style.setProperty('background','rgba(0, 0, 0, .15)');
        drawLogo.classList.remove('hidden');
        spacer.classList.add('hidden');
    } else if (window.scrollY <= 400){
        nav.classList.remove('nav-scroll');
        dropDown.style.setProperty('background','rgba(255, 255, 255, .15)');
        drawLogo.classList.add('hidden');
        spacer.classList.remove('hidden');
    }
});

toggle.addEventListener('click', function() {
    dropDown.classList.toggle('open');
    const isOpen = dropDown.classList.contains('open');
    toggleIcon.classList = isOpen ? 'fas fa-xmark' : 'fas fa-bars';
});
