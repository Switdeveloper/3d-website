// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', () => {
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

if (hamburger && mobileMenu) {
hamburger.addEventListener('click', () => {
hamburger.classList.toggle('active');
mobileMenu.classList.toggle('active');
document.body.style.overflow = hamburger.classList.contains('active') ? 'hidden' : '';
});

mobileLinks.forEach(link => {
link.addEventListener('click', () => {
hamburger.classList.remove('active');
mobileMenu.classList.remove('active');
document.body.style.overflow = '';
});
});
}
});
