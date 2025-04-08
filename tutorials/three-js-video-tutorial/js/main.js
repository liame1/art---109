import * as THREE from 'three';
// Import add-ons
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'; 
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// ~~~~~ GLOBAL VARIABLES
let scene, camera, renderer, ball, cylinder, dog;
let sceneContainer = document.querySelector("#scene-container");


function init() {
    // ~~~~~ SCENE + CAMERA + RENDERER :
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xc25964)

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
    const geometry2 = new THREE.SphereGeometry( 0.5, 32, 16 );
    // const material = new THREE.MeshBasicMaterial( {color: 0x0000ff} );
    
    // ~~~~~ ADD TEXTURE :
    const texture = new THREE.TextureLoader().load('textures/grasslight-big.jpg');
    const material = new THREE.MeshStandardMaterial({ map: texture });
    const baiscMaterial = new THREE.MeshBasicMaterial({ map: texture });
    cylinder = new THREE.Mesh( geometry, baiscMaterial );
    scene.add(cylinder);
    cylinder.position.set(-4, 0, 0);
    ball = new THREE.Mesh( geometry2, material );
    scene.add(ball);
    ball.position.set( 0, 0, 0);
    
    // ~~~~~ LIGHTS :
    const light = new THREE.DirectionalLight(0x223300, 20);
        light.position.set(0,1,2);
        scene.add(light);
    const light2 = new THREE.DirectionalLight(0x00ffff, 20);
        light.position.set(0,1,2);
        scene.add(light2);


    camera.position.z = 5;

    // ~~~~~ LOAD DOG :
    loader.load('assets/dog_shiny.gltf', function (gltf){
        dog = gltf.scene;
        scene.add( dog );
        dog.scale.set(3,3,3);
        dog.position.set(3, -2, 0);
    })

}

// ~~~~~ ANIMATION LOOP :
function animate() {
    
    requestAnimationFrame(animate);

    cylinder.rotation.x += 0.001;
    cylinder.rotation.y += 0.001;
    ball.rotation.x += -0.001;
    ball.rotation.y += -0.001;

    ball.position.x = Math.sin(Date.now() / 1000);
    ball.position.y = Math.sin(Date.now() / 2000);
    ball.position.z = Math.sin(Date.now() / 3000);

    if (dog) {
        // dog.rotation.x += -0.001;
        dog.rotation.y += -0.001;
        dog.position.y = Math.sin(Date.now() / 2000);
    }

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