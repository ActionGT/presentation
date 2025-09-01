// Import the stylesheet. Vite will handle bundling this.
import './style.css'
import { Application } from '@splinetool/runtime';






// --- PRESENTER MODE LOGIC ---
// This function sets up the ability to show and hide your talking points.

function setupPresenterMode() {
  // Listen for any key press on the page.
  window.addEventListener('keydown', (event) => {
    
    // Check if the key that was pressed was 'p' (we make it lowercase to be sure).
    if (event.key.toLowerCase() === 'p') {
      
      // Find all the presenter notes elements you've placed in your HTML.
      const notes = document.querySelectorAll('.presenter-notes');
      
      // If any notes were found...
      if (notes.length > 0) {
        
        // ...loop through each one and toggle the 'hidden' class.
        // This is what makes them appear and disappear.
        notes.forEach(note => {
          note.classList.toggle('hidden');
        });
      }
    }
  });
}


// --- PRICING CARD MODAL LOGIC ---
// This function handles the logic for enlarging the pricing card.

function setupPricingModal() {
  const pricingCard = document.getElementById('pricing-card');
  const modalOverlay = document.getElementById('modal-overlay');

  // If both the card and overlay exist on the page...
  if (pricingCard && modalOverlay) {
    
    // Listen for a click on the pricing card.
    pricingCard.addEventListener('click', () => {
      // When clicked, show the overlay and mark the card as active.
      modalOverlay.classList.remove('hidden');
      pricingCard.classList.add('active');
    });

    // Listen for a click on the overlay itself.
    modalOverlay.addEventListener('click', () => {
      // When the overlay is clicked, hide it and deactivate the card.
      modalOverlay.classList.add('hidden');
      pricingCard.classList.remove('active');
    });
  }
  
}

// --- INITIALIZE ---
// Run both setup functions once the page is loaded and the script runs.
setupPresenterMode();
setupPricingModal();
// --- INITIALIZE ---
// Run the setup function once the page is loaded and the script runs.
setupPresenterMode();

const canvas3d = document.getElementById('canvas-3d');
if (canvas3d) {
    const app = new Application(canvas3d);
    app.load('https://prod.spline.design/DqaRbUTKXph-uxGD/scene.splinecode');
}

const canvasDev = document.getElementById('canvas-dev');
if (canvasDev) {
    const app2 = new Application(canvasDev);
    app2.load('https://prod.spline.design/MNZYh629UtSBvl5k/scene.splinecode');
}

const canvasSound = document.getElementById('canvas-sound');
if (canvasSound) {
    const app3 = new Application(canvasSound);
    app3.load('https://prod.spline.design/JSYCPZZD6xqKYDG1/scene.splinecode');
}

const canvasPrice = document.getElementById('canvas-price');
if (canvasPrice) {
    const app4 = new Application(canvasPrice);
    app4.load('https://prod.spline.design/y1q8fU46w3hOn6Mm/scene.splinecode');
}

const example1 = document.getElementById('example-1');
if (example1) {
    const app5 = new Application(example1);
    app5.load('https://prod.spline.design/AYK4xrmL18OwYAib/scene.splinecode');
}

const example2 = document.getElementById('example-2');
if (example2) {
  const app6 = new Application(example2);
  app6.load('https://prod.spline.design/mp2vDS3z9iOda5S3/scene.splinecode');
}




