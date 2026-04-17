# Kicks3D - Premium Sneaker Store

A modern, multi-page 3D sneaker store built with HTML, CSS, JavaScript, and Three.js. Features interactive 3D product displays, smooth animations, and a responsive design.

## Features

- **Multi-page Layout**: Home, Products, About, and Contact pages
- **Interactive 3D Displays**: Three.js powered 3D shoe visualizations
- **Modern Design**: Clean, responsive design with smooth animations
- **Product Filtering**: Filter products by category (Running, Basketball, Skate, Lifestyle)
- **Shopping Cart**: Add items to cart with visual feedback
- **Contact Form**: Functional contact form with validation
- **Responsive**: Works on desktop, tablet, and mobile devices

## Pages

1. **Home (index.html)** - Hero section with floating 3D shoes, featured products, categories
2. **Products (products.html)** - Full product catalog with filtering
3. **About (about.html)** - Company story, mission, team, and stats
4. **Contact (contact.html)** - Contact form, FAQ, and location info

## Tech Stack

- HTML5
- CSS3 (with CSS variables and animations)
- Vanilla JavaScript (ES6+)
- Three.js for 3D graphics
- Google Fonts (Inter)

## How to Run

**Option 1: Direct file access**
Simply open `index.html` in your web browser.

**Option 2: Local server**
```bash
cd kicks3d
python3 -m http.server 8080
```
Then visit: http://localhost:8080

## Live Demo

View at: https://switdeveloper.github.io/3d-website/

## File Structure

```
kicks3d/
├── index.html          # Home page
├── products.html       # Products catalog
├── about.html          # About page
├── contact.html        # Contact page
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   ├── main.js         # Main JavaScript (3D scenes, cart)
│   ├── products.js     # Products page functionality
│   └── contact.js      # Contact page functionality
├── package.json
└── README.md
```

## License

MIT License
