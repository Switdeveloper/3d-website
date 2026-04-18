// Custom Cursor Trail
const cursorTrail = document.getElementById('cursor-trail');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let trailX = window.innerWidth / 2;
let trailY = window.innerHeight / 2;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Interactive elements hover state for cursor
const interactiveElements = document.querySelectorAll('a, button, input, textarea, .work-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursorTrail.classList.add('active'));
    el.addEventListener('mouseleave', () => cursorTrail.classList.remove('active'));
});

// 3D Setup (Three.js)
const canvas = document.getElementById('canvas3d');
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Floating Geometric Torus Knot
const geometry = new THREE.TorusKnotGeometry(1.5, 0.4, 100, 16);
const material = new THREE.MeshPhysicalMaterial({
    color: 0x00d4ff,
    metalness: 0.9,
    roughness: 0.1,
    wireframe: true,
    transparent: true,
    opacity: 0.8
});
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

// Particle System
const particlesCount = 30;
const particlesGeometry = new THREE.BufferGeometry();
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
    // Spread particles across the screen
    posArray[i] = (Math.random() - 0.5) * 15;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const particlesMaterial = new THREE.PointsMaterial({
    size: 0.1,
    color: 0x7c3aed,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// Lights
const pointLight = new THREE.PointLight(0x00d4ff, 2, 10);
pointLight.position.set(2, 3, 4);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
scene.add(ambientLight);

// Animation Loop
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    // Smooth Cursor Trail Interpolation
    trailX += (mouseX - trailX) * 0.15;
    trailY += (mouseY - trailY) * 0.15;
    cursorTrail.style.transform = `translate(${trailX}px, ${trailY}px)`;

    // Rotate Torus Knot slowly
    torusKnot.rotation.x = elapsedTime * 0.2;
    torusKnot.rotation.y = elapsedTime * 0.3;

    // Make Torus Knot respond to mouse (normalized coords -1 to 1)
    const normX = (mouseX / window.innerWidth) * 2 - 1;
    const normY = -(mouseY / window.innerHeight) * 2 + 1;

    // Smoothly interpolate rotation towards mouse
    torusKnot.rotation.x += normY * 0.05;
    torusKnot.rotation.y += normX * 0.05;

    // Rotate Particles slightly
    particlesMesh.rotation.y = elapsedTime * 0.05;

    // Particles react to cursor proximity
    // Since calculating exact distance per particle is heavy, we'll shift the whole mesh slightly
    particlesMesh.position.x = normX * 0.5;
    particlesMesh.position.y = normY * 0.5;

    renderer.render(scene, camera);
}
animate();

// Handle Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// GSAP Scroll Animations
gsap.registerPlugin(ScrollTrigger);

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animate elements on scroll
const sections = document.querySelectorAll('.section');
sections.forEach((sec) => {
    gsap.fromTo(sec,
        { opacity: 0, y: 50 },
        {
            scrollTrigger: {
                trigger: sec,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out"
        }
    );
});

// 3D Card Tilt Effect on Hover
const tiltCards = document.querySelectorAll('.tilt-card');
tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation (-15deg to 15deg)
        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    });
});

// Mobile Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
