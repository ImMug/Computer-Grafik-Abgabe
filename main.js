import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import "./style.css";

// Scene
const scene = new THREE.Scene();

// Load the model
const loader = new GLTFLoader();

let street;
let streetPos = new THREE.Vector3();
loader.load("./model/street/scene.gltf", function (gltf) {
  street = gltf.scene;
  streetPos = street.position;

  streetPos.set(0, -0, 0);

  street.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  scene.add(gltf.scene);
});

let baby;
let babyPos = new THREE.Vector3();
loader.load("./model/baby_waiting_for_birth/scene.gltf", function (gltf) {
  baby = gltf.scene;
  babyPos = baby.position;

  babyPos.set(1.5, 3, 0);
  baby.rotateY(-1.7);

  baby.material = new THREE.MeshPhongMaterial(baby.material);
  baby.scale.set(2, 2, 2);

  baby.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  scene.add(gltf.scene);
});

let man;
let manPos = new THREE.Vector3();
loader.load("./model/prayingman/scene.gltf", function (gltf) {
  man = gltf.scene;
  manPos = man.position;

  manPos.set(0, 0.1, 0);
  man.scale.set(3, 3, 3);

  man.rotateY(1.7);

  man.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  scene.add(gltf.scene);
});


loader.load('./model/skybox/scene.gltf', function(gltf) {
    const skybox = gltf.scene;
    
    skybox.position.set(0, 0, 0);

    skybox.scale.set(10, 10, 10);

    scene.add(skybox);
});


let shiba;
let shibaPos = new THREE.Vector3();
loader.load("./model/shiba/scene.gltf", function (gltf) {
  shiba = gltf.scene;
  shibaPos = shiba.position;

  shiba.rotateY(1.7);

  shiba.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  shibaPos.set(0, 0.5, 1);
  shiba.scale.set(0.5, 0.5, 0.5);

  scene.add(gltf.scene);
});

// Particle System
const particleSystem = createParticleSystem();
scene.add(particleSystem);

function createParticleSystem() {
  const particleCount = 1000;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = Math.random() * 10 - 5;
    positions[i * 3 + 1] = Math.random() * 10;
    positions[i * 3 + 2] = Math.random() * 10 - 5;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({ color: 0xffFFFF, size: 0.01 });

  return new THREE.Points(geometry, material);
}

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Light
const light = new THREE.PointLight(0xffffff, 1, 25);
light.position.set(0, 20, 0);
light.castShadow = true;
light.shadow.mapSize.width = 128;
light.shadow.mapSize.height = 128;
light.shadow.bias = -0.01;
scene.add(light);

const ambientLight = new THREE.PointLight(0xcc5500, 1, 15);
ambientLight.position.set(0, 2, 1);
scene.add(ambientLight);

// Camera
const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  1,
  1000
);
camera.position.set(-1.2213209019834297, 6.846941408822232, 14.070857523782168);
scene.add(camera);

// Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.rotateSpeed = 0.5;

// Resize
window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
});

// Animation Loop
const animate = () => {
  updateParticleSystem();

  // Baby hoch und runter bewegen
  if (baby) {
    babyPos.y = Math.sin(Date.now() * 0.001) * 0.5 + 2;
  }

  controls.update();

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

function updateParticleSystem() {
  const positions = particleSystem.geometry.attributes.position.array;

  for (let i = 0; i < positions.length; i += 3) {
    positions[i + 1] -= 0.01;

    if (positions[i + 1] < 0) {
      positions[i + 1] = Math.random() * 10;
    }
  }

  particleSystem.geometry.attributes.position.needsUpdate = true;
}

animate();
