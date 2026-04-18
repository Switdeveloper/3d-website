// Products Page JavaScript
let cart = [];

document.addEventListener('DOMContentLoaded', () => {
renderProducts();
initFilters();
initCart();
initModal();
});

function renderProducts() {
const grid = document.getElementById('productsGrid');
if (!grid) return;

grid.innerHTML = products.map(product => `
<div class="product-card" data-category="${product.category}" data-id="${product.id}">
<div class="product-image">
<img src="${product.image}" alt="${product.name}" loading="lazy">
</div>
<div class="product-info">
<span class="category-tag">${product.category}</span>
<h3>${product.name}</h3>
<div class="product-rating">
${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
<span>(${product.reviews})</span>
</div>
<p class="price">$${product.price}</p>
<button class="btn-primary btn-add" data-id="${product.id}">Add to Cart</button>
<button class="btn-secondary btn-quickview" data-id="${product.id}">Quick View</button>
</div>
</div>
`).join('');

// Re-bind click events after rendering
bindProductEvents();
}

function bindProductEvents() {
document.querySelectorAll('.btn-add').forEach(btn => {
btn.addEventListener('click', (e) => {
const productId = parseInt(e.target.dataset.id);
addToCart(productId);
});
});

document.querySelectorAll('.btn-quickview').forEach(btn => {
btn.addEventListener('click', (e) => {
const productId = parseInt(e.target.dataset.id);
openModal(productId);
});
});
}

function initFilters() {
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
btn.addEventListener('click', () => {
filterBtns.forEach(b => b.classList.remove('active'));
btn.classList.add('active');

const filter = btn.dataset.filter;
const productCards = document.querySelectorAll('.product-card');

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
updateCartDisplay();
}

function addToCart(productId) {
const product = products.find(p => p.id === productId);
if (!product) return;

const existingItem = cart.find(item => item.id === productId);
if (existingItem) {
existingItem.quantity++;
} else {
cart.push({ ...product, quantity: 1 });
}

updateCartDisplay();
showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
cart = cart.filter(item => item.id !== productId);
updateCartDisplay();
}

function updateCartDisplay() {
const count = cart.reduce((sum, item) => sum + item.quantity, 0);
document.querySelectorAll('.cart-count').forEach(el => {
el.textContent = count;
});

const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
document.getElementById('cartTotal').textContent = `$${total}`;

renderCartItems();
}

function renderCartItems() {
const cartItems = document.getElementById('cartItems');
if (!cartItems) return;

if (cart.length === 0) {
cartItems.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
return;
}

cartItems.innerHTML = cart.map(item => `
<div class="cart-item">
<img src="${item.image}" alt="${item.name}" class="cart-item-image">
<div class="cart-item-details">
<h4>${item.name}</h4>
<p>$${item.price} x ${item.quantity}</p>
</div>
<button class="cart-remove" data-id="${item.id}">&times;</button>
</div>
`).join('');

document.querySelectorAll('.cart-remove').forEach(btn => {
btn.addEventListener('click', () => {
removeFromCart(parseInt(btn.dataset.id));
});
});
}

function showNotification(message) {
const notification = document.createElement('div');
notification.className = 'notification';
notification.textContent = message;
document.body.appendChild(notification);

setTimeout(() => {
notification.classList.add('show');
}, 10);

setTimeout(() => {
notification.classList.remove('show');
setTimeout(() => notification.remove(), 300);
}, 2000);
}

function initModal() {
const modal = document.getElementById('productModal');
const closeBtn = document.getElementById('modalClose');
const overlay = document.querySelector('.cart-overlay');

if (closeBtn) {
closeBtn.addEventListener('click', closeModal);
}

if (overlay) {
overlay.addEventListener('click', closeModal);
}

document.getElementById('modalAddToCart')?.addEventListener('click', () => {
const modalProductId = parseInt(document.getElementById('modalAddToCart').dataset.id);
addToCart(modalProductId);
closeModal();
});
}

function openModal(productId) {
const product = products.find(p => p.id === productId);
if (!product) return;

const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalRating = document.getElementById('modalRating');
const modalPrice = document.getElementById('modalPrice');
const modalDescription = document.getElementById('modalDescription');
const sizeOptions = document.getElementById('sizeOptions');
const colorOptions = document.getElementById('colorOptions');
const modalAddToCart = document.getElementById('modalAddToCart');

if (modalImage) modalImage.src = product.image;
if (modalCategory) modalCategory.textContent = product.category;
if (modalTitle) modalTitle.textContent = product.name;
if (modalRating) {
modalRating.innerHTML = `${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))} (${product.reviews} reviews)`;
}
if (modalPrice) modalPrice.textContent = `$${product.price}`;
if (modalDescription) modalDescription.textContent = product.description;

if (sizeOptions) {
sizeOptions.innerHTML = product.sizes.map(size => `
<button class="size-btn" data-size="${size}">${size}</button>
`).join('');

sizeOptions.querySelectorAll('.size-btn').forEach(btn => {
btn.addEventListener('click', () => {
sizeOptions.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
btn.classList.add('active');
});
});
}

if (colorOptions) {
colorOptions.innerHTML = product.colors.map(color => `
<button class="color-btn" style="background-color: ${color}" data-color="${color}"></button>
`).join('');

colorOptions.querySelectorAll('.color-btn').forEach(btn => {
btn.addEventListener('click', () => {
colorOptions.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
btn.classList.add('active');
});
});
}

if (modalAddToCart) {
modalAddToCart.dataset.id = product.id;
modalAddToCart.textContent = 'Add to Cart';
modalAddToCart.style.background = '';
}

modal.classList.add('active');
document.body.style.overflow = 'hidden';
}

function closeModal() {
const modal = document.getElementById('productModal');
modal?.classList.remove('active');
document.body.style.overflow = '';
}

document.getElementById('cartIcon')?.addEventListener('click', () => {
document.getElementById('cartSidebar')?.classList.add('active');
});

document.getElementById('cartClose')?.addEventListener('click', () => {
document.getElementById('cartSidebar')?.classList.remove('active');
});

document.getElementById('cartOverlay')?.addEventListener('click', () => {
document.getElementById('cartSidebar')?.classList.remove('active');
});
