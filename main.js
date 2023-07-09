import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GlitchPass } from 'three/addons/postprocessing/GlitchPass.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geo_sun = new THREE.SphereGeometry( 3, 64, 32 ); 
const mat_sun = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
const sun = new THREE.Mesh( geo_sun, mat_sun ); scene.add( sun );
scene.add( sun );

const geo_mercury = new THREE.SphereGeometry( 0.5, 64, 32 ); 
const mat_mercury = new THREE.MeshBasicMaterial( { color: 0xFFD966 } ); 
const mercury = new THREE.Mesh( geo_mercury, mat_mercury );
scene.add( mercury );
mercury.position.set(5, 0, 0);

const geo_venus = new THREE.SphereGeometry( 0.8, 64, 32 ); 
const mat_venus = new THREE.MeshBasicMaterial( { color: 0xD68C1D } ); 
const venus = new THREE.Mesh( geo_venus, mat_venus ); 
scene.add( venus );
venus.position.set(10, 0, 0);

const geo_earth = new THREE.SphereGeometry( 0.8, 64, 32 ); 
const mat_earth = new THREE.MeshBasicMaterial( { color: 0x3B9613 } ); 
const earth = new THREE.Mesh( geo_earth, mat_earth ); 
scene.add( earth );
earth.position.set(13, 0, 0);

const geo_mars = new THREE.SphereGeometry( 0.8, 64, 32 ); 
const mat_mars = new THREE.MeshBasicMaterial( { color: 0x983030 } ); 
const mars = new THREE.Mesh( geo_mars, mat_mars ); 
scene.add( mars );
mars.position.set(17, 0, 0);

const geo_jupiter = new THREE.SphereGeometry( 2, 64, 32 ); 
const mat_jupiter = new THREE.MeshBasicMaterial( { color: 0xFF4F4F } ); 
const jupiter = new THREE.Mesh( geo_jupiter, mat_jupiter ); 
scene.add( jupiter );
jupiter.position.set(22, 0, 0);

const geo_saturn = new THREE.SphereGeometry( 1.5, 64, 32 ); 
const mat_saturn = new THREE.MeshBasicMaterial( { color: 0xFBCC9C } ); 
const saturn = new THREE.Mesh( geo_saturn, mat_saturn ); 
scene.add( saturn );
saturn.position.set(27, 0, 0);

const geo_uranus = new THREE.SphereGeometry( 0.6, 64, 32 ); 
const mat_uranus = new THREE.MeshBasicMaterial( { color: 0x81C5B3 } ); 
const uranus = new THREE.Mesh( geo_uranus, mat_uranus ); 
scene.add( uranus );
uranus.position.set(30, 0, 0);

const geo_neptune = new THREE.SphereGeometry( 0.8, 64, 32 ); 
const mat_neptune = new THREE.MeshBasicMaterial( { color: 0x799FC1 } ); 
const neptune = new THREE.Mesh( geo_neptune, mat_neptune ); 
scene.add( neptune );
neptune.position.set(32, 0, 0);

camera.position.x = 15;
camera.position.z = 25;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();