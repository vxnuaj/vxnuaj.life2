import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const renderer = new THREE.WebGL1Renderer({antialiase: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene ();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(70, window.outerWidth/window.innerHeight, 0.1, 1000)
camera.position.set(0, 40, 0);

const ambientLight = new THREE.AmbientLight(0xb8a9eb);
scene.add(ambientLight);

const directionallight = new THREE.DirectionalLight(0x9578f5);
scene.add(directionallight)

const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', () => {renderer.render(scene, camera)});
controls.target.set(0,0,0);
controls.update();

const loader = new GLTFLoader();
loader.load ('models/disrupt3s.glb', function(gltf){
    const model = gltf.scene;
    model.position.set(0, 0, 0);
    scene.add(model);
    renderer.render(scene, camera)
}, undefined, function (error) {
    console.error(error)
}
);

window.onresize = function (){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}