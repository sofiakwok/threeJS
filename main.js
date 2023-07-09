import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GlitchPass } from 'three/addons/postprocessing/GlitchPass.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Vector3 } from 'three';

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const controls = new OrbitControls( camera, renderer.domElement );
controls.maxDistance = 70;
//controls.autoRotate = true;
//controls.autoRotateSpeed = 5;


const geo_sun = new THREE.SphereGeometry( 3, 64, 32 ); 
const mat_sun = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
const sun = new THREE.Mesh( geo_sun, mat_sun ); scene.add( sun );
scene.add( sun );

const geo_mercury = new THREE.SphereGeometry( 0.5, 64, 32 ); 
const mat_mercury = new THREE.MeshBasicMaterial( { color: 0xFFD966 } ); 
const mercury = new THREE.Mesh( geo_mercury, mat_mercury );
scene.add( mercury );
mercury.position.set(5, 0, 0);
const mercury_orbit = new THREE.EllipseCurve(
	0,  0,            // ax, aY
	5, 5,           // xRadius, yRadius
	0,  2 * Math.PI,  // aStartAngle, aEndAngle
	false,            // aClockwise
	0                 // aRotation
);
const mercury_points = mercury_orbit.getPoints( 50 );
const orbit_geo_mercury = new THREE.BufferGeometry().setFromPoints( mercury_points );
const material = new THREE.LineBasicMaterial( { color: 0xFFFFFF } );
// Create the final object to add to the scene
const ellipse = new THREE.Line( orbit_geo_mercury, material );
scene.add(ellipse);

const geo_venus = new THREE.SphereGeometry( 0.8, 64, 32 ); 
const mat_venus = new THREE.MeshBasicMaterial( { color: 0xD68C1D } ); 
const venus = new THREE.Mesh( geo_venus, mat_venus ); 
scene.add( venus );
venus.position.set(8, 0, 0);
const venus_curve = new THREE.EllipseCurve(
	0,  0,            // ax, aY
	8, 8,           // xRadius, yRadius
	0,  2 * Math.PI,  // aStartAngle, aEndAngle
	false,            // aClockwise
	0                 // aRotation
);
const venus_points = venus_curve.getPoints( 50 );
const orbit_geo_venus = new THREE.BufferGeometry().setFromPoints( venus_points );
// Create the final object to add to the scene
const venus_orbit = new THREE.Line( orbit_geo_venus, material );
scene.add(venus_orbit);

const geo_earth = new THREE.SphereGeometry( 0.8, 64, 32 ); 
const mat_earth = new THREE.MeshBasicMaterial( { color: 0x3B9613 } ); 
const earth = new THREE.Mesh( geo_earth, mat_earth ); 
scene.add( earth );
earth.position.set(11, 0, 0);
const earth_curve = new THREE.EllipseCurve(
	0,  0,            // ax, aY
	11, 11,           // xRadius, yRadius
	0,  2 * Math.PI,  // aStartAngle, aEndAngle
	false,            // aClockwise
	0                 // aRotation
);
const earth_points = earth_curve.getPoints( 50 );
const orbit_geo_earth = new THREE.BufferGeometry().setFromPoints( earth_points );
// Create the final object to add to the scene
const earth_orbit = new THREE.Line( orbit_geo_earth, material );
scene.add(earth_orbit);

const geo_mars = new THREE.SphereGeometry( 0.8, 64, 32 ); 
const mat_mars = new THREE.MeshBasicMaterial( { color: 0x983030 } ); 
const mars = new THREE.Mesh( geo_mars, mat_mars ); 
scene.add( mars );
mars.position.set(14, 0, 0);
const mars_curve = new THREE.EllipseCurve(
	0,  0,            // ax, aY
	14, 14,           // xRadius, yRadius
	0,  2 * Math.PI,  // aStartAngle, aEndAngle
	false,            // aClockwise
	0                 // aRotation
);
const mars_points = mars_curve.getPoints( 50 );
const orbit_geo_mars = new THREE.BufferGeometry().setFromPoints( mars_points );
// Create the final object to add to the scene
const mars_orbit = new THREE.Line( orbit_geo_earth, material );
scene.add(mars_orbit);

const geo_jupiter = new THREE.SphereGeometry( 2, 64, 32 ); 
const mat_jupiter = new THREE.MeshBasicMaterial( { color: 0xFF4F4F } ); 
const jupiter = new THREE.Mesh( geo_jupiter, mat_jupiter ); 
scene.add( jupiter );
jupiter.position.set(22, 0, 0);
const jupiter_curve = new THREE.EllipseCurve(
	0,  0,            // ax, aY
	22, 22,           // xRadius, yRadius
	0,  2 * Math.PI,  // aStartAngle, aEndAngle
	false,            // aClockwise
	0                 // aRotation
);
const jupiter_points = jupiter_curve.getPoints( 50 );
const orbit_geo_jupiter = new THREE.BufferGeometry().setFromPoints( jupiter_points );
// Create the final object to add to the scene
const jupiter_orbit = new THREE.Line( orbit_geo_jupiter, material );
scene.add(jupiter_orbit);

const geo_saturn = new THREE.SphereGeometry( 1.5, 64, 32 ); 
const mat_saturn = new THREE.MeshBasicMaterial( { color: 0xFBCC9C } ); 
const saturn = new THREE.Mesh( geo_saturn, mat_saturn ); 
scene.add( saturn );
saturn.position.set(27, 0, 0);
const saturn_curve = new THREE.EllipseCurve(
	0,  0,            // ax, aY
	27, 27,           // xRadius, yRadius
	0,  2 * Math.PI,  // aStartAngle, aEndAngle
	false,            // aClockwise
	0                 // aRotation
);
const saturn_points = saturn_curve.getPoints( 50 );
const orbit_geo_saturn = new THREE.BufferGeometry().setFromPoints( saturn_points );
// Create the final object to add to the scene
const saturn_orbit = new THREE.Line( orbit_geo_saturn, material );
scene.add(saturn_orbit);

const geo_uranus = new THREE.SphereGeometry( 0.6, 64, 32 ); 
const mat_uranus = new THREE.MeshBasicMaterial( { color: 0x81C5B3 } ); 
const uranus = new THREE.Mesh( geo_uranus, mat_uranus ); 
scene.add( uranus );
uranus.position.set(30, 0, 0);
const uranus_curve = new THREE.EllipseCurve(
	0,  0,            // ax, aY
	30, 30,           // xRadius, yRadius
	0,  2 * Math.PI,  // aStartAngle, aEndAngle
	false,            // aClockwise
	0                 // aRotation
);
const uranus_points = uranus_curve.getPoints( 50 );
const orbit_geo_uranus = new THREE.BufferGeometry().setFromPoints( uranus_points );
// Create the final object to add to the scene
const uranus_orbit = new THREE.Line( orbit_geo_uranus, material );
scene.add(uranus_orbit);

const geo_neptune = new THREE.SphereGeometry( 0.8, 64, 32 ); 
const mat_neptune = new THREE.MeshBasicMaterial( { color: 0x799FC1 } ); 
const neptune = new THREE.Mesh( geo_neptune, mat_neptune ); 
scene.add( neptune );
neptune.position.set(32, 0, 0);
const neptune_curve = new THREE.EllipseCurve(
	0,  0,            // ax, aY
	32, 32,           // xRadius, yRadius
	0,  2 * Math.PI,  // aStartAngle, aEndAngle
	false,            // aClockwise
	0                 // aRotation
);
const neptune_points = neptune_curve.getPoints( 50 );
const orbit_geo_neptune = new THREE.BufferGeometry().setFromPoints( neptune_points );
// Create the final object to add to the scene
const neptune_orbit = new THREE.Line( orbit_geo_neptune, material );
scene.add(neptune_orbit);

camera.position.x = 0;
camera.position.z = 50;

var orbitBody = function (body, orbiter, speed, distanceFromBody) {
    var time = Date.now();
    orbiter.position.x = Math.cos(time * speed / 2000) * distanceFromBody + body.position.x;
    orbiter.position.y = Math.sin(time * speed / 2000) * distanceFromBody + body.position.z;
}

function animate() {
	requestAnimationFrame( animate );
    controls.update();
    orbitBody(sun, mercury, 4.787, 5);
    orbitBody(sun, venus, 3.502, 8);
    orbitBody(sun, earth, 2.978, 11);
    orbitBody(sun, mars, 2.4077, 14);
    orbitBody(sun, jupiter, 1.307, 22);
    orbitBody(sun, saturn, 0.969, 27);
    orbitBody(sun, uranus, 0.681, 30);
    orbitBody(sun, neptune, 0.543, 32);

	renderer.render( scene, camera );
}
animate();