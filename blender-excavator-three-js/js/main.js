import * as THREE from 'three';
// Import add-ons
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'; 
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// ~~~~~ GLOBAL VARIABLES
let scene, camera, renderer, cube, cylinder;
let sceneContainer = document.querySelector("#scene-container");


function init() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, sceneContainer.clientWidth / sceneContainer.clientHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
    // renderer.setSize(window.innerWidth, window.innerHeight);
    sceneContainer.appendChild(renderer.domElement);
    // document.body.appendChild(renderer.domElement);

    // ~~~~~ INITIATE ADD ONS :
    new OrbitControls(camera, renderer.domElement);
    const loader = new GLTFLoader(); // to load 3d models

    // ~~~~~ CREATE GEOMETRY :
    
    // const material = new THREE.MeshBasicMaterial( {color: 0x0000ff} );
    
    // ~~~~~ ADD TEXTURE :
    
    // ~~~~~ LIGHTS :
    const light = new THREE.DirectionalLight(0x223300, 20);
        light.position.set(0,1,2);
        scene.add(light);
    const light2 = new THREE.DirectionalLight(0x00ffff, 20);
        light.position.set(0,1,2);
        scene.add(light2);


    camera.position.z = 0;
    camera.position.x = 30;
    camera.position.y = 0;

    
    loader.load('assets/Yellow-Drill-gltf-export.gltf', function (gltf){
        const excavator = gltf.scene;
        scene.add( excavator );
        excavator.scale.set(1,1,1);
        excavator.position.set(0, -10, 0);
    })

}

function animate() {
    
    requestAnimationFrame(animate);

    // ~~~~~ ALWAYS END ANIMATION LOOP W/ RENDERER
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = sceneContainer.clientWidth / sceneContainer.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
}

window.addEventListener('resize', onWindowResize, false);


init();
animate();