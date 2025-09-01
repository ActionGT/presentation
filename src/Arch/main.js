import './style.css'
import { Application } from '@splinetool/runtime';




const canvas = document.getElementById('canvas-3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/DqaRbUTKXph-uxGD/scene.splinecode');


const canvas2 = document.getElementById('canvas-dev');
const app2 = new Application(canvas2);
app2.load('https://prod.spline.design/MNZYh629UtSBvl5k/scene.splinecode');

const canvas3 = document.getElementById('canvas-sound');
const app3 = new Application(canvas3);
app3.load('https://prod.spline.design/JSYCPZZD6xqKYDG1/scene.splinecode');




const canvas4 = document.getElementById('example-1');
const app4 = new Application(canvas4);
app4.load('https://prod.spline.design/AYK4xrmL18OwYAib/scene.splinecode');




const canvas5 = document.getElementById('example-2');
const app5 = new Application(canvas5);
app5.load('https://prod.spline.design/qd1UDFcUbssQiOng/scene.splinecode');




function setupPresenterMode() {
  // Listen for any key press on the page
  window.addEventListener('keydown', (event) => {
    
    // Check if the key pressed was 'p' (case-insensitive)
    if (event.key.toLowerCase() === 'p') {
      
      // Find all the presenter notes elements on the page
      const notes = document.querySelectorAll('.presenter-notes');
      
      // If we found any notes...
      if (notes.length > 0) {
        
        // Loop through each note element and toggle its 'hidden' class
        notes.forEach(note => {
          note.classList.toggle('hidden');
        });
      }
    }
  });
}

// Run the setup function once the page is loaded and ready
setupPresenterMode();


















































































// import * as THREE from 'three';
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
// import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
// import GUI from 'lil-gui'


// //debug
// const gui = new GUI();

// const scenes = [];

// =================================================================
// NEW: Function to set up the 3D Text Scene
// =================================================================
// function setupTextScene(canvas) {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 100);//(explain each parameter: fov, aspect ratio, near plane, far plane )
//     // camera.position.z = 4;
//     camera.position.x = 0
//     camera.position.y = 0
//     camera.position.z = 3

//     const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);


//     const rgbeLoader = new RGBELoader();
//     rgbeLoader.load('/textures/hdr/syferfontein_0d_clear_puresky_1k.hdr', (environmentMap) => {
//         environmentMap.mapping = THREE.EquirectangularReflectionMapping;
//         scene.background = null; // Make background transparent
//         scene.environment = environmentMap;
//     });

    

//     //Lights

//     const ambientLight = new THREE.AmbientLight(0xffffff, .5);
//     scene.add(ambientLight);
//     gui.add(ambientLight, 'intensity').min(0).max(10).step(0.001).name('Ambient Light Intensity')


//     const directionalLight = new THREE.DirectionalLight(0xffffff, 20);
//     directionalLight.position.set(1, 1, 2);
//     scene.add(directionalLight);

//     gui.add(directionalLight, 'intensity').min(0).max(10).step(0.001).name('Direct Light Intensity')
//     gui.add(directionalLight.position, 'x').min(-10).max(10).step(0.001).name('Light X')
//     gui.add(directionalLight.position, 'y').min(-10).max(10).step(0.001).name('Light Y')
//     gui.add(directionalLight.position, 'z').min(-10).max(10).step(0.001).name('Light Z')

//     //Direct light 2
//     const directionalLight2 = new THREE.DirectionalLight(0x0000FF , 20);
//     directionalLight2.position.set(-1, -1, -2);
//     scene.add(directionalLight2);
//     //Add a GUI for the second light
//     gui.add(directionalLight2, 'intensity').min(0).max(10).step(0.001).name('Direct Light 2 Intensity')
//     gui.add(directionalLight2.position, 'x').min(-10).max(10).step(0.001).name('Light 2 X')
//     gui.add(directionalLight2.position, 'y').min(-10).max(10).step(0.001).name('Light 2 Y')
//     gui.add(directionalLight2.position, 'z').min(-10).max(10).step(0.001).name('Light 2 Z')

//     // Loaders
//         const fontLoader = new FontLoader();
//     const textureLoader = new THREE.TextureLoader();
//     // const matcapTexture = textureLoader.load('/textures/Metal_Pitted_001_4K/8.png');


//     const alphaTexture = textureLoader.load('/textures/Metal_Pitted_001_4K/alpha.jpg')
//     const colorTexture = textureLoader.load('/textures/door/Metal_Pitted_001_color.png')
//     colorTexture.colorSpace = THREE.SRGBColorSpace
//     const Texture = textureLoader.load('/textures/Metal_Pitted_001_4K/Metal_Pitted_001_height.png')
//     const normalTexture = textureLoader.load('/textures/Metal_Pitted_001_4K/Metal_Pitted_001_normal.png')
//     const ambientOcclusionTexture = textureLoader.load('/textures/Metal_Pitted_001_4K/Metal_Pitted_001_ambientOcclusion.png')
//     const metalnessTexture = textureLoader.load('/textures/Metal_Pitted_001_4K/Metal_Pitted_001_metallic.png')
//     const roughnessTexture = textureLoader.load('/textures/Metal_Pitted_001_4K/Metal_Pitted_001_roughness.png')

//     //Trying a new texture for the text
//     // const colorTexture2 = textureLoader.load('/textures/blue_metal_4k/blue_metal_plate_diff_4k.png')
//     // colorTexture2.colorSpace = THREE.SRGBColorSpace;
//     // const armTexture2 = textureLoader.load('/textures/blue_metal_4k/blue_metal_plate_arm_4k.png')
//     // const displacementTexture = textureLoader.load('/textures/blue_metal_4k/blue_metal_plate_disp_4k.png')
//     // const normalTexture2 = textureLoader.load('/textures/blue_metal_4k/blue_metal_plate_nor_4k.png')
//     // const roughnessTexture2 = textureLoader.load('/textures/blue_metal_4k/blue_metal_plate_rough_4k.png')


//     // In setupTextScene, after you create the text mesh
//     // const floorGeometry = new THREE.PlaneGeometry(10, 10);
//     // const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });
//     // const floor = new THREE.Mesh(floorGeometry, floorMaterial);
//     // floor.receiveShadow = true; // Tell this object it can receive shadows
//     // floor.position.z = -1; // Position it behind the text
//     // scene.add(floor);



//     fontLoader.load(
//         '/fonts/helvetiker_regular.typeface.json',
//         (font) => {
//             const textGeometry = new TextGeometry(
//                 'Electro Chowder', {
//                 font: font,
//                 size: 2,
//                 height: 0.1,
//                 depth: 0.09,
//                 curveSegments: 8,
//                 bevelEnabled: true,
//                 bevelThickness: 0.01,
//                 bevelSize: 0.01,
//                 bevelOffset: 0,
//                 bevelSegments: 4
//             }
//             );

            
//             textGeometry.center();
//             textGeometry.setAttribute('uv2', new THREE.BufferAttribute(textGeometry.attributes.uv.array, 2));

//              const material = new THREE.MeshStandardMaterial({
//                 metalness: 0.9,
//                 roughness: 0.1,
//             });

            


//             // const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture });
//             const textMesh = new THREE.Mesh(textGeometry, material);
//             // In your fontLoader callback, after creating the textMesh
//             textMesh.castShadow = true;
//             scene.add(textMesh);

//             renderer.shadowMap.enabled = true;

//             // gui.add(material, 'metalness').min(0).max(1).step(0.001).name('Metalness');
//             // gui.add(material, 'roughness').min(0).max(1).step(0.001).name('Roughness');
//             // gui.add(material, 'displacementScale').min(0).max(1).step(0.001).name('Displacement Scale');    

//             // Add the text scene to our main scenes array to be animated
//            scenes.push({
//                 scene,
//                 camera,
//                 renderer,
//                 shape: textMesh,
//                 canvas,
//                 type: 'text'
//             });
//         }
//     );
// }


// =================================================================
// The rest of your code remains largely the same
// =================================================================

// Scene 1: 3D Art (Morphing Icosahedron)
// function setupScene1(canvas) {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
//     camera.position.z = 2.5;

//     const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

//     const geometry = new THREE.IcosahedronGeometry(1, 0);
//     const material = new THREE.MeshStandardMaterial({ color: 0x8b5cf6, metalness: 0.2, roughness: 0.5 });
//     const shape = new THREE.Mesh(geometry, material);
//     scene.add(shape);

//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
//     directionalLight.position.set(-10, -2.53, -10);//(x, y, z)
//     scene.add(directionalLight);

//     scenes.push({ scene, camera, renderer, shape, canvas, type: 'art' });
// }

// Scene 2: Web Dev (Code Cube)
// function setupScene2(canvas) {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
//     camera.position.z = 2.5;

//     const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

//     const textureLoader = new THREE.TextureLoader();
//     const codeTexture = textureLoader.load('https://placehold.co/512x512/111827/4f46e5?text=\\nconst%20app%20%3D%20()=>%20{\\n%20%20return%20`3D`%20\\n}');
//     codeTexture.wrapS = THREE.RepeatWrapping;
//     codeTexture.wrapT = THREE.RepeatWrapping;

//     const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
//     const material = new THREE.MeshStandardMaterial({ map: codeTexture, metalness: 0.1, roughness: 0.6 });
//     const shape = new THREE.Mesh(geometry, material);
//     scene.add(shape);

//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
//     scene.add(ambientLight);
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
//     directionalLight.position.set(-2, 1, 2);
//     scene.add(directionalLight);

//     scenes.push({ scene, camera, renderer, shape, canvas, type: 'dev' });
// }

// Scene 3: Sound (Waveform)
// function setupScene3(canvas) {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
//     camera.position.z = 2.5;

//     const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

//     const geometry = new THREE.PlaneGeometry(2, 1, 20, 10);
//     const material = new THREE.MeshStandardMaterial({ color: 0xec4899, wireframe: true });
//     const shape = new THREE.Mesh(geometry, material);
//     scene.add(shape);

//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);
//     const pointLight = new THREE.PointLight(0xec4899, 2, 10);
//     pointLight.position.set(0, 0, 2);
//     scene.add(pointLight);

//     scenes.push({ scene, camera, renderer, shape, canvas, type: 'sound' });
// }

// =================================================================
// Initialize all scenes
// =================================================================

// setupScene1(document.getElementById('canvas-3d'));
// setupScene2(document.getElementById('canvas-dev'));
// setupScene3(document.getElementById('canvas-sound'));

// const clock = new THREE.Clock();

// function animate() {
//     const elapsedTime = clock.getElapsedTime();

//     scenes.forEach(s => {
//         if (s.isVisible) {
//             // The animation logic for 'text' type is no longer needed
//             if (s.type === 'art') {
//                 s.shape.rotation.x += 0.005;
//                 s.shape.rotation.y += 0.005;
//                 const scale = 1 + Math.sin(elapsedTime) * 0.1;
//                 s.shape.scale.set(scale, scale, scale);
//             } else if (s.type === 'dev') {
//                 s.shape.rotation.x -= 0.003;
//                 s.shape.rotation.y -= 0.003;
//             } else if (s.type === 'sound') {
//                 const positions = s.shape.geometry.attributes.position;
//                 for (let i = 0; i < positions.count; i++) {
//                     const y = Math.sin(i * 0.5 + elapsedTime * 3) * 0.2;
//                     positions.setY(i, y);
//                 }
//                 positions.needsUpdate = true;
//             }
//             s.renderer.render(s.scene, s.camera);
//         }
//     });

//     requestAnimationFrame(animate);
// }

// Use ResizeObserver for efficient, responsive canvases
// const resizeObserver = new ResizeObserver(entries => {
//     for (const entry of entries) {
//         const sceneInfo = scenes.find(s => s.canvas === entry.target);
//         if (sceneInfo) {
//             const { width, height } = entry.contentRect;
//             sceneInfo.camera.aspect = width / height;
//             sceneInfo.camera.updateProjectionMatrix();
//             sceneInfo.renderer.setSize(width, height, false);
//         }
//     }
// });

// Use Intersection Observer to only render visible scenes
// const visibilityObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         const sceneInfo = scenes.find(s => s.canvas === entry.target);
//         if (sceneInfo) {
//             sceneInfo.isVisible = entry.isIntersecting;
//         }
//     });
// }, { threshold: 0.1 });

// // Attach observers to all canvases
// document.querySelectorAll('canvas').forEach(canvas => {
//     visibilityObserver.observe(canvas);
//     resizeObserver.observe(canvas);
// });

// animate();