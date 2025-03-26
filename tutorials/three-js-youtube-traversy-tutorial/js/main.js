import * as THREE from 'three';
// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models

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
    const geometry = new THREE.CylinderGeometry( 1, 2, 3 );
    const geometry2 = new THREE.BoxGeometry( 1,1,1 );
    // const material = new THREE.MeshBasicMaterial( {color: 0x0000ff} );
    
    // ~~~~~ ADD TEXTURE :
    const texture = new THREE.TextureLoader().load('textures/grasslight-big.jpg');
    const material = new THREE.MeshStandardMaterial({ map: texture });
    cylinder = new THREE.Mesh( geometry, material );
    scene.add(cylinder);
    cylinder.position.set(-3, 0, 0);
    cube = new THREE.Mesh( geometry2, material );
    scene.add(cube);
    cube.position.set( 0, 0, 0);
    
    // ~~~~~ LIGHTS :
    const light = new THREE.DirectionalLight(0x223300, 20);
        light.position.set(0,1,2);
        scene.add(light);
    const light2 = new THREE.DirectionalLight(0x00ffff, 20);
        light.position.set(0,1,2);
        scene.add(light2);



    camera.position.z = 5;

    
    loader.load('assets/dog_shiny.gltf', function (gltf){
        const dog = gltf.scene;
        scene.add( dog );
        dog.scale.set(3,3,3);
        dog.position.set(2, -2, 0);
    })

}

function animate() {
    
    requestAnimationFrame(animate);

    cylinder.rotation.x += 0.001;
    cylinder.rotation.y += 0.001;
    cube.rotation.x += -0.001;
    cube.rotation.y += -0.001;

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