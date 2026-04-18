// Product Data
const products = [
 {
 id: 1,
 name: "Nike Air Max 270",
 category: "lifestyle",
 price: 150,
 image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop",
 description: "The Nike Air Max 270 delivers visible cushioning under every step with the large Max Air unit.",
 sizes: [7, 8, 9, 10, 11, 12],
 colors: ["#ff0000", "#000000", "#ffffff"],
 rating: 4.8,
 reviews: 324
 },
 {
 id: 2,
 name: "Adidas Ultraboost 22",
 category: "running",
 price: 190,
 image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600&h=400&fit=crop",
 description: "Energy return meets comfort with responsive Boost cushioning and a Primeknit+ upper.",
 sizes: [7, 8, 9, 10, 11, 12, 13],
 colors: ["#000000", "#ffffff", "#4a90d9"],
 rating: 4.9,
 reviews: 512
 },
 {
 id: 3,
 name: "Jordan 1 Retro High",
 category: "basketball",
 price: 170,
 image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=400&fit=crop",
 description: "The shoe that started it all. Premium leather and iconic design since 1985.",
 sizes: [8, 9, 10, 11, 12],
 colors: ["#c41e3a", "#000000", "#1e3a8a"],
 rating: 4.7,
 reviews: 892
 },
 {
 id: 4,
 name: "Vans Old Skool",
 category: "skate",
 price: 65,
 image: "https://images.unsplash.com/photo-1525966227006-20a65c75cf62?w=600&h=400&fit=crop",
 description: "Classic skate shoe with the iconic side stripe and durable canvas construction.",
 sizes: [6, 7, 8, 9, 10, 11, 12],
 colors: ["#000000", "#ffffff", "#c41e3a"],
 rating: 4.6,
 reviews: 1567
 },
 {
 id: 5,
 name: "New Balance 990v5",
 category: "running",
 price: 185,
 image: "https://images.unsplash.com/photo-1551107696-a4b0c7a9e6d9?w=600&h=400&fit=crop",
 description: "The perfect blend of cushioning and stability. Made in USA.",
 sizes: [7, 8, 9, 10, 11, 12, 13, 14],
 colors: ["#808080", "#000000", "#ffffff"],
 rating: 4.8,
 reviews: 423
 },
 {
 id: 6,
 name: "Puma Suede Classic",
 category: "lifestyle",
 price: 70,
 image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=400&fit=crop",
 description: "Iconic suede upper with the classic formstrip. A true streetwear staple.",
 sizes: [6, 7, 8, 9, 10, 11],
 colors: ["#c41e3a", "#000000", "#1e3a8a", "#ffffff"],
 rating: 4.5,
 reviews: 678
 },
 {
 id: 7,
 name: "Nike Dunk Low",
 category: "lifestyle",
 price: 110,
 image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=400&fit=crop",
 description: "Originally designed for the hardwood, the Dunk Low is now a streetwear icon.",
 sizes: [7, 8, 9, 10, 11, 12, 13],
 colors: ["#ffffff", "#000000", "#008000"],
 rating: 4.7,
 reviews: 1203
 },
 {
 id: 8,
 name: "Converse Chuck 70",
 category: "lifestyle",
 price: 85,
 image: "https://images.unsplash.com/photo-1491553895911-0055uj3a34c?w=600&h=400&fit=crop",
 description: "The upgraded Chuck with premium materials and enhanced cushioning.",
 sizes: [6, 7, 8, 9, 10, 11, 12],
 colors: ["#000000", "#ffffff", "#c41e3a"],
 rating: 4.6,
 reviews: 2341
 },
 {
 id: 9,
 name: "Nike ZoomX Vaporfly",
 category: "running",
 price: 250,
 image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=400&fit=crop",
 description: "Race-day speed with ZoomX foam and carbon fiber plate.",
 sizes: [7, 8, 9, 10, 11, 12],
 colors: ["#00ff00", "#000000", "#ff69b4"],
 rating: 4.9,
 reviews: 287
 },
 {
 id: 10,
 name: "Adidas Forum Low",
 category: "basketball",
 price: 100,
 image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=400&fit=crop",
 description: "Classic basketball style with ankle strap and premium leather.",
 sizes: [7, 8, 9, 10, 11, 12, 13],
 colors: ["#ffffff", "#000000"],
 rating: 4.4,
 reviews: 312
 },
 {
 id: 11,
 name: "Vans Sk8-Hi",
 category: "skate",
 price: 75,
 image: "https://images.unsplash.com/photo-1560769629-975e13f0c470?w=600&h=400&fit=crop",
 description: "High-top protection with signature waffle outsole for superior grip.",
 sizes: [6, 7, 8, 9, 10, 11, 12, 13],
 colors: ["#000000", "#ffffff", "#000080"],
 rating: 4.7,
 reviews: 890
 },
{
    id: 12,
    name: "Yeezy Boost 350",
    category: "lifestyle",
    price: 230,
    image: "https://images.unsplash.com/photo-1628253747713-5e1a5d676949?w=600&h=400&fit=crop",
    description: "Revolutionary design with Boost cushioning and Primeknit upper.",
    sizes: [7, 8, 9, 10, 11, 12, 13],
    colors: ["#f5f5dc", "#808080", "#000000"],
    rating: 4.6,
    reviews: 1543
  },
  {
    id: 13,
    name: "Nike Pegasus 40",
    category: "running",
    price: 130,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=400&fit=crop",
    description: "Your trusted daily trainer returns with plush React foam cushioning.",
    sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    colors: ["#000000", "#ffffff", "#ff4500", "#4169e1"],
    rating: 4.7,
    reviews: 2156
  },
  {
    id: 14,
    name: "Adidas NMD R1",
    category: "lifestyle",
    price: 150,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=400&fit=crop",
    description: "Street-ready style with responsive Boost and iconic NMD design.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    colors: ["#ff0000", "#000000", "#ffffff", "#000080"],
    rating: 4.5,
    reviews: 987
  },
  {
    id: 15,
    name: "Jordan 4 Retro",
    category: "basketball",
    price: 210,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&h=400&fit=crop",
    description: "The legend lives on. Mesh panels and visible Air unit.",
    sizes: [7, 8, 9, 10, 11, 12, 13],
    colors: ["#c41e3a", "#000000", "#ffffff", "#1e3a8a"],
    rating: 4.8,
    reviews: 1432
  },
  {
    id: 16,
    name: "Nike React Infinity Run",
    category: "running",
    price: 160,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=400&fit=crop",
    description: "Designed to help reduce injury with wider platform and React foam.",
    sizes: [6, 7, 8, 9, 10, 11, 12, 13, 14],
    colors: ["#4169e1", "#ff69b4", "#000000"],
    rating: 4.6,
    reviews: 654
  },
  {
    id: 17,
    name: "Vans Classic Slip-On",
    category: "skate",
    price: 55,
    image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=600&h=400&fit=crop",
    description: "Easy-on comfort with iconic checkerboard pattern.",
    sizes: [5, 6, 7, 8, 9, 10, 11, 12],
    colors: ["#000000", "#ffffff", "#ff0000"],
    rating: 4.7,
    reviews: 3241
  },
  {
    id: 18,
    name: "New Balance Fresh Foam 1080",
    category: "running",
    price: 165,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop",
    description: "Luxurious cushioning for the long run with Fresh Foam X.",
    sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    colors: ["#4169e1", "#000000", "#f5f5dc"],
    rating: 4.8,
    reviews: 445
  },
  {
    id: 19,
    name: "Nike Blazer Mid 77",
    category: "lifestyle",
    price: 105,
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23be557?w=600&h=400&fit=crop",
    description: "Vintage hoops style with exposed foam tongue and vintage details.",
    sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    colors: ["#ffffff", "#000000", "#c41e3a"],
    rating: 4.6,
    reviews: 1678
  },
  {
    id: 20,
    name: "Adidas Samba OG",
    category: "lifestyle",
    price: 100,
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=600&h=400&fit=crop",
    description: "Timeless indoor soccer silhouette turned street classic.",
    sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    colors: ["#000000", "#ffffff", "#f5f5dc"],
    rating: 4.7,
    reviews: 2134
  },
  {
    id: 21,
    name: "Jordan 11 Retro",
    category: "basketball",
    price: 225,
    image: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?w=600&h=400&fit=crop",
    description: "Concord patent leather shine with Carbon Fiber spring plate.",
    sizes: [7, 8, 9, 10, 11, 12, 13],
    colors: ["#ffffff", "#000000"],
    rating: 4.9,
    reviews: 1876
  },
  {
    id: 22,
    name: "Asics Gel-Kayano 29",
    category: "running",
    price: 160,
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=600&h=400&fit=crop",
    description: "Stability meets comfort with FF Blast+ foam and GEL technology.",
    sizes: [6, 7, 8, 9, 10, 11, 12, 13, 14],
    colors: ["#ff4500", "#000000", "#4169e1"],
    rating: 4.7,
    reviews: 523
  },
  {
    id: 23,
    name: "Puma RS-X",
    category: "lifestyle",
    price: 120,
    image: "https://images.unsplash.com/photo-1556048219-bb6978360b84?w=600&h=400&fit=crop",
    description: "Exaggerated design with Running System technology for all-day comfort.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    colors: ["#ff0000", "#000000", "#4169e1", "#00ff00"],
    rating: 4.4,
    reviews: 432
  },
  {
    id: 24,
    name: "Nike SB Delta Force",
    category: "skate",
    price: 75,
    image: "https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?w=600&h=400&fit=crop",
    description: "Classic skate silhouette with Zoom Air insole for boardfeel.",
    sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    colors: ["#000000", "#ffffff", "#c41e3a"],
    rating: 4.5,
    reviews: 876
  },
  {
    id: 25,
    name: "Reebok Club C 85",
    category: "lifestyle",
    price: 80,
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=600&h=400&fit=crop",
    description: "Clean tennis heritage with soft leather upper.",
    sizes: [5, 6, 7, 8, 9, 10, 11, 12],
    colors: ["#ffffff", "#000000", "#008000"],
    rating: 4.6,
    reviews: 1567
  },
  {
    id: 26,
    name: "Adidas Dame 8",
    category: "basketball",
    price: 130,
    image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=600&h=400&fit=crop",
    description: "Damian Lillard's signature shoe with Lightstrike Pro cushioning.",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: ["#c41e3a", "#000000", "#4169e1"],
    rating: 4.7,
    reviews: 298
  },
  {
    id: 27,
    name: "Nike Free Run 5.0",
    category: "running",
    price: 120,
    image: "https://images.unsplash.com/photo-1571915110081-34b6d3a5a3de?w=600&h=400&fit=crop",
    description: "Natural movement with updated Nike Free sole and breathable mesh.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    colors: ["#ff4500", "#000000", "#4169e1", "#ffffff"],
    rating: 4.5,
    reviews: 765
  },
  {
    id: 28,
    name: "Converse Run Star Hike",
    category: "lifestyle",
    price: 110,
    image: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=600&h=400&fit=crop",
    description: "Platform styling with chunky design and heritage Chuck Taylor comfort.",
    sizes: [5, 6, 7, 8, 9, 10, 11, 12],
    colors: ["#000000", "#ffffff", "#f5f5dc"],
    rating: 4.3,
    reviews: 543
  },
  {
    id: 29,
    name: "Under Armour Curry 9",
    category: "basketball",
    price: 160,
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&h=400&fit=crop",
    description: "Stephen Curry's latest with UA Flow cushioning technology.",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: ["#000000", "#c41e3a", "#4169e1"],
    rating: 4.8,
    reviews: 412
  },
  {
    id: 30,
    name: "Fila Disruptor II",
    category: "lifestyle",
    price: 75,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&h=400&fit=crop",
    description: "Chunky dad shoe with iconic oversized ribbed design.",
    sizes: [5, 6, 7, 8, 9, 10, 11, 12],
    colors: ["#ffffff", "#000000", "#ff69b4", "#4169e1"],
    rating: 4.4,
    reviews: 2234
  },
  {
    id: 31,
    name: "Adidas Ultraboost Light",
    category: "running",
    price: 200,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop",
    description: "The ultimate running experience with new Light BOOST foam.",
    sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    colors: ["#000000", "#ffffff", "#c41e3a", "#4169e1"],
    rating: 4.9,
    reviews: 678
  },
  {
    id: 32,
    name: "Vans Era",
    category: "skate",
    price: 55,
    image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=600&h=400&fit=crop",
    description: "Original skate shoe with padded collars and vulcanized construction.",
    sizes: [5, 6, 7, 8, 9, 10, 11, 12, 13],
    colors: ["#000000", "#ffffff", "#4169e1", "#c41e3a"],
    rating: 4.6,
    reviews: 2876
  },
  {
    id: 33,
    name: "Nike Invincible 3",
    category: "running",
    price: 185,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=400&fit=crop",
    description: "Maximum cushion for maximum miles with ZoomX foam stack.",
    sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    colors: ["#ff69b4", "#000000", "#00ff00"],
    rating: 4.8,
    reviews: 534
  },
  {
    id: 34,
    name: "Jordan 3 Retro",
    category: "basketball",
    price: 200,
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=400&fit=crop",
    description: "Tinker Hatfield's masterpiece with visible Air and elephant print.",
    sizes: [7, 8, 9, 10, 11, 12, 13],
    colors: ["#c41e3a", "#000000", "#ffffff", "#1e3a8a"],
    rating: 4.9,
    reviews: 1654
  }
];

// Featured products
const featuredProducts = products.slice(0, 6);

// Cart functionality
let cart = [];

function addToCart(productId) {
 const product = products.find(p => p.id === productId);
 if (product) {
 const existingItem = cart.find(item => item.id === productId);
 if (existingItem) {
 existingItem.quantity++;
 } else {
 cart.push({ ...product, quantity: 1 });
 }
 updateCartCount();
 return true;
 }
 return false;
}

function removeFromCart(productId) {
 cart = cart.filter(item => item.id !== productId);
 updateCartCount();
}

function updateCartCount() {
 const count = cart.reduce((sum, item) => sum + item.quantity, 0);
 document.querySelectorAll('.cart-count').forEach(el => {
 el.textContent = count;
 });
}

function getCartTotal() {
 return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
 module.exports = { products, featuredProducts, cart, addToCart, removeFromCart };
}
