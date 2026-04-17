// Products Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
 initFilters();
 initCart();
});

function initFilters() {
 const filterBtns = document.querySelectorAll('.filter-btn');
 const productCards = document.querySelectorAll('.product-card');
 
 filterBtns.forEach(btn => {
 btn.addEventListener('click', () => {
 // Remove active class from all buttons
 filterBtns.forEach(b => b.classList.remove('active'));
 btn.classList.add('active');
 
 const filter = btn.dataset.filter;
 
 productCards.forEach(card => {
 if (filter === 'all' || card.dataset.category === filter) {
 card.style.display = 'block';
 card.style.animation = 'fadeIn 0.5s ease-out';
 } else {
 card.style.display = 'none';
 }
 });
 });
 });
}

function initCart() {
 let cartCount = 0;
 const cartCountEl = document.querySelector('.cart-count');
 
 document.querySelectorAll('.btn-add').forEach(btn => {
 btn.addEventListener('click', (e) => {
 e.preventDefault();
 const originalText = btn.textContent;
 btn.textContent = 'Added!';
 btn.style.background = '#00c9a7';
 
 cartCount++;
 cartCountEl.textContent = cartCount;
 
 // Animation
 cartCountEl.style.transform = 'scale(1.5)';
 setTimeout(() => {
 cartCountEl.style.transform = 'scale(1)';
 }, 200);
 
 // Reset button after 2 seconds
 setTimeout(() => {
 btn.textContent = originalText;
 btn.style.background = '';
 }, 2000);
 });
 });
}
