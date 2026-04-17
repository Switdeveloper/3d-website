// Contact Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
 initContactForm();
});

function initContactForm() {
 const form = document.getElementById('contactForm');
 
 if (form) {
 form.addEventListener('submit', (e) => {
 e.preventDefault();
 
 const formData = new FormData(form);
 const data = Object.fromEntries(formData);
 
 // Simulate form submission
 const btn = form.querySelector('.btn-primary');
 const originalText = btn.textContent;
 btn.textContent = 'Sending...';
 btn.disabled = true;
 
 setTimeout(() => {
 btn.textContent = 'Message Sent!';
 btn.style.background = '#00c9a7';
 
 setTimeout(() => {
 btn.textContent = originalText;
 btn.style.background = '';
 btn.disabled = false;
 form.reset();
 }, 2000);
 }, 1500);
 });
 }
 
 // FAQ Accordion
 document.querySelectorAll('.faq-item').forEach(item => {
 item.addEventListener('click', () => {
 const isActive = item.classList.contains('active');
 
 // Close all items
 document.querySelectorAll('.faq-item').forEach(i => {
 i.classList.remove('active');
 });
 
 // Open clicked item if it wasn't active
 if (!isActive) {
 item.classList.add('active');
 }
 });
 });
}
