// Kicks3D - Main JavaScript
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Hero 3D Scene
document.addEventListener('DOMContentLoaded', () => {
initHeroScene();
initFeaturedScenes();
initCart();
});

function initHeroScene() {
 const container = document.getElementById('hero-3d');
 if (!container) return;

 const scene = new THREE.Scene();
 const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
 const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
 
 renderer.setSize(container.clientWidth, container.clientHeight);
 renderer.setClearColor(0x000000, 0);
 container.appendChild(renderer.domElement);

// Create multiple floating cubes to represent shoes
  const shoes = [];
  const colors = [0xff6b35, 0x004e89, 0x00c9a7, 0x9b5de5, 0xf15bb5, 0x00ff00, 0xff69b4, 0x4169e1];

  for (let i = 0; i < 8; i++) {
 const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
 const material = new THREE.MeshStandardMaterial({
 color: colors[i],
 metalness: 0.7,
 roughness: 0.2,
 emissive: colors[i],
 emissiveIntensity: 0.1
 });
 const cube = new THREE.Mesh(geometry, material);
 
 // Position in a circle
 const angle = (i / 5) * Math.PI * 2;
 cube.position.x = Math.cos(angle) * 4;
 cube.position.y = Math.sin(angle) * 1;
 cube.position.z = Math.sin(angle) * 2;
 
 // Add edges
 const edges = new THREE.EdgesGeometry(geometry);
 const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }));
 cube.add(line);
 
 scene.add(cube);
 shoes.push({ mesh: cube, angle: angle, speed: 0.005 + i * 0.002 });
 }

 // Lighting
 const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
 scene.add(ambientLight);
 
 const pointLight1 = new THREE.PointLight(0xff6b35, 2, 100);
 pointLight1.position.set(5, 5, 5);
 scene.add(pointLight1);
 
 const pointLight2 = new THREE.PointLight(0x00c9a7, 2, 100);
 pointLight2.position.set(-5, -5, 5);
 scene.add(pointLight2);

 camera.position.z = 8;

 // Mouse interaction
 let mouseX = 0;
 let mouseY = 0;
 
 document.addEventListener('mousemove', (e) => {
 mouseX = (e.clientX / window.innerWidth) * 2 - 1;
 mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
 });

 // Animation
 function animate() {
 requestAnimationFrame(animate);
 
 // Rotate each shoe
 shoes.forEach((shoe, i) => {
 shoe.mesh.rotation.x += shoe.speed;
 shoe.mesh.rotation.y += shoe.speed * 1.5;
 
 // Floating effect
 shoe.mesh.position.y += Math.sin(Date.now() * 0.001 + i) * 0.005;
 });
 
 // Camera follows mouse slightly
 camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
 camera.position.y += (mouseY * 1 - camera.position.y) * 0.05;
 camera.lookAt(scene.position);
 
 renderer.render(scene, camera);
 }
 animate();

 // Resize handler
 window.addEventListener('resize', () => {
 camera.aspect = container.clientWidth / container.clientHeight;
 camera.updateProjectionMatrix();
 renderer.setSize(container.clientWidth, container.clientHeight);
 });
}

function initFeaturedScenes() {
  // Initialize 3D scenes for featured products
  const featuredContainers = ['shoe-1', 'shoe-2', 'shoe-3', 'shoe-4', 'shoe-5', 'shoe-6'];
  const colors = [0xff6b35, 0x004e89, 0x00c9a7, 0x9b5de5, 0xf15bb5, 0x00ff00];
 
 featuredContainers.forEach((id, index) => {
 const container = document.getElementById(id);
 if (!container) return;
 
 const scene = new THREE.Scene();
 const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
 const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
 
 renderer.setSize(container.clientWidth, container.clientHeight);
 renderer.setClearColor(0x000000, 0);
 container.appendChild(renderer.domElement);
 
 // Create shoe representation
 const geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2);
 const material = new THREE.MeshStandardMaterial({
 color: colors[index],
 metalness: 0.6,
 roughness: 0.3,
 emissive: colors[index],
 emissiveIntensity: 0.05
 });
 const cube = new THREE.Mesh(geometry, material);
 
 // Add edges
 const edges = new THREE.EdgesGeometry(geometry);
 const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }));
 cube.add(line);
 
 scene.add(cube);
 
 // Lighting
 const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
 scene.add(ambientLight);
 
 const pointLight = new THREE.PointLight(colors[index], 1.5, 50);
 pointLight.position.set(3, 3, 3);
 scene.add(pointLight);
 
 camera.position.z = 3;
 
 // Animation
 function animate() {
 requestAnimationFrame(animate);
 cube.rotation.x += 0.005;
 cube.rotation.y += 0.01;
 renderer.render(scene, camera);
 }
 animate();
 
 // Hover effect
 container.parentElement.addEventListener('mouseenter', () => {
 container.style.transform = 'scale(1.1)';
 });
 
 container.parentElement.addEventListener('mouseleave', () => {
 container.style.transform = 'scale(1)';
 });
 });
}

// Cart functionality
function initCart() {
 let cartCount = 0;
 const cartCountEl = document.querySelector('.cart-count');
 
 document.querySelectorAll('.btn-add').forEach(btn => {
 btn.addEventListener('click', (e) => {
 e.preventDefault();
 cartCount++;
 cartCountEl.textContent = cartCount;
 
 // Add animation
 cartCountEl.style.transform = 'scale(1.5)';
 setTimeout(() => {
 cartCountEl.style.transform = 'scale(1)';
 }, 200);
 });
 });
 
 document.querySelectorAll('.btn-secondary').forEach(btn => {
 btn.addEventListener('click', () => {
 alert('Product details coming soon!');
 });
 });
}
