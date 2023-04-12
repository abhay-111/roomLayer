import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import SplineLoader from "@splinetool/loader";

      // import splinetoolloader as SplineLoader from "https://cdn.jsdelivr.net/npm/@splinetool/loader@0.9.273/+esm";

window.mobileCheck = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};
var mouseX = 0,
  mouseY = 0;
let raycaster = new THREE.Raycaster();
let pointer = new THREE.Vector2();
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
// camera
const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  10,
  100000
);
let cameraPosition = {
  x: -200,
  y: 600,
  z: 0,
};
// if (mobileCheck()) {
//   cameraPosition = {
//     x: -800,
//     y: 650,
//     z: 1100,
//   };
// }
const angle = {
  min: 245,
  max: 15,
};
camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
// camera.quaternion.setFromEuler(new THREE.Euler(-0.1, -0.52, -0.05));
camera.zoom = 100;
// scene
const scene = new THREE.Scene();
// const axesHelper = new THREE.AxesHelper(800);
// scene.add(axesHelper);

// spline scene
const loader = new SplineLoader();
loader.load(
  "https://prod.spline.design/DLZ8S-ieGXX1xaRa/scene.splinecode",
  (splineScene) => {
    scene.add(splineScene);
    // isLoading.value = false;
    const data = {
      loading:false
    }
    parent.postMessage({ type: "onSuccess", data }, "*");
  }
);

const light = new THREE.PointLight("#F62020", 0, 2400, 7);
// light.power= 10
light.position.set(10.99512532258404, 725.6006777569545, -815.8038594965543);
scene.add(light);

const light2 = new THREE.PointLight("#44A837", 0, 2400, 7);
light2.position.set(400.99512532258404, 570.6006777569545, -815.8038594965543);
scene.add(light2);

const light3 = new THREE.PointLight("#DCA567", 0, 2400, 8);
light3.position.set(370.99512532258404, 881.6006777569545, -675);
scene.add(light3);

const light4 = new THREE.PointLight("#FFFFFF", 0, 1500, 8);
light4.position.set(800, 420, 280);
scene.add(light4);



// const light4 = new THREE.PointLight("0xff0000", 4, 2500, 2);
// // light.power= 10
// light4.position.set(-1050.99512532258404, 900, -1);
// scene.add(light4);

// const axesHelper = new THREE.AxesHelper(800);
// scene.add(axesHelper);

// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio * 0.9);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// scene settings
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

scene.background = new THREE.Color("#e698a8");
renderer.setClearAlpha(0);

// orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = false;
controls.dampingFactor = 0.125;
controls.maxZoom = 10;
controls.enablePan = false;
controls.minPolarAngle = (Math.PI / 180) * 35; // radians
controls.maxPolarAngle = (Math.PI / 180) * 50; // radians
controls.rotateSpeed *= -1;

// How far you can orbit horizontally, upper and lower limits.
// If set, the interval [ min, max ] must be a sub-interval of [ - 2 PI, 2 PI ], with ( max - min < 2 PI )
if (mobileCheck()) {
  angle.max += 10;
}
// controls.minAzimuthAngle = angle.min * (Math.PI / 180); // radians
// controls.maxAzimuthAngle = angle.max * (Math.PI / 180);

//Event Listeners
window.addEventListener("resize", onWindowResize);
document.addEventListener("mousemove", onDocumentMouseMove, false);
// document.addEventListener("touchmove", onDocumentTouchStart, false);
// document.addEventListener('touchend',touchClick,false)
window.addEventListener("pointermove", onPointerMove);
window.addEventListener("click", onClick);

// function touchClick(){
//   raycaster.setFromCamera(pointer, camera);
//   const intersects = raycaster.intersectObjects(scene.children);
//   console.log(intersects)
//   if (intersects.length > 1) {
//     if (checkYT(intersects) || intersects[0].object.name === "CREATOR") {
//       openModal();
//       // sidenav.classList.toggle("show");
//     }
//   }
// }
// function onDocumentTouchStart(event) {
//   console.log("TouchStart");

//   event.preventDefault();

//   event.clientX = event.touches[0].pageX;
//   event.clientY = event.touches[0].pageY;
//   onDocumentMouseMove(event);
// }
function onDocumentMouseMove(event) {
  mouseX = (event.clientX - windowHalfX) / 2;
  mouseY = (event.clientY - windowHalfY) / 2;
  // pointer.x = (event.clientX - windowHalfX) / 2;
  // pointer.y = (event.clientY - windowHalfY) / 2;
}

function onWindowResize() {
  console.log("Resized");
  camera.aspect = window.innerWidth / window.innerHeight;
  console.log(camera.aspect);
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onPointerMove(event) {
  // calculate pointer position in normalized device coordinates
  // (-1 to +1) for both components
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function hoverObject() {
  raycaster.setFromCamera(pointer, camera);
  const intersects = raycaster.intersectObjects(scene.children);
  // console.log(intersects)
}

function checkYT(intersects) {
  let found = false;
  for (let i = 0; i < intersects.length; i++) {
    const splitName = intersects[i].object.name.split("-");
    found = splitName.includes("YT");
    if (found) {
      // navigation.value.navigationLinks.scrollLeft = 0;
      // currentTab.value = 1;
      return found;
    }
  }

  return found;
}
function checkSP(intersects) {
  // console.log(intersects)
  let found = false;
  for (let i = 0; i < intersects.length; i++) {
    const splitName = intersects[i].object.name.split("-");
    found = splitName.includes("SPOTIFY");
    if (found) {
      // navigation.value.navigationLinks.scrollLeft = 176 / 3;
      // currentTab.value = 3;
      return found;
    }
  }
  return found;
}
function checkAZ(intersects) {
  // console.log(intersects)
  let found = false;
  for (let i = 0; i < intersects.length; i++) {
    const splitName = intersects[i].object.name.split("-");
    found = splitName.includes("AMAZON");
    if (found) {
      // navigation.value.navigationLinks.scrollLeft = 0;
      // currentTab.value = 2;
      return found;
    }
  }
  return found;
}
const checkCreator = (intersects) => {
  // currentTab.value = 0;
  // navigation.value.navigationLinks.scrollLeft = 0;
  return intersects[0].object.name.split("-").includes("CREATOR");
};
function onClick(event) {
  // if (!isModalOpen.value) {
    onPointerMove(event);
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(scene.children);
    console.log(intersects);
    let a = [];
    for (let i = 0; i < intersects.length - 1; i++) {
      a.push(intersects[i].object.name);
    }
    if (intersects.length > 1) {
      const data = {
        target:''
      }
      if (checkYT(intersects)){
        data.target = 'YT'
      }else if (checkSP(intersects)) {
        data.target = "SP";
      }else if (checkAZ(intersects)) {
        data.target = "AZ";
      }else if (
        checkCreator(intersects) ||
        intersects[0].object.name === "Follow me.png"
      ) {
        data.target = "CR";
      }
        
          parent.postMessage({ type: "onSuccess", data }, "*");

    }
  // }
}
const t1 = gsap.timeline({ yoyo: false, repeat: -1, repeatDelay: 0.8 });
t1.fromTo(light3.position, { z: -675 }, { z: -525, duration: 1 });
t1.fromTo(
  light3,
  { intensity: 0 },
  { intensity: 2.9, duration: 1, ease: "power1.in" },
  0
);
t1.to(light3.position, { z: -675, duration: 1 });
t1.to(light3, { intensity: 0, duration: 1, ease: "power1.out" }, 1);

const t2 = gsap.timeline({
  yoyo: false,
  repeat: -1,
  delay: 0.8,
  repeatDelay: 0.8,
});
t2.fromTo(light2.position, { z: -815 }, { z: -665, duration: 1 });
t2.fromTo(
  light2,
  { intensity: 0 },
  { intensity: 2.5, duration: 1, ease: "power1.in" },
  0
);
t2.to(light2.position, { z: -815, duration: 1 });
t2.to(light2, { intensity: 0, duration: 1, ease: "power1.out" }, 1);

const t3 = gsap.timeline({
  yoyo: false,
  repeat: -1,
  delay: 1.6,
  repeatDelay: 0.8,
});
t3.fromTo(light.position, { z: -815 }, { z: -665, duration: 1 });
t3.fromTo(
  light,
  { intensity: 0 },
  { intensity: 3.5, duration: 1, ease: "power1.in" },
  0
);
t3.to(light.position, { z: -815, duration: 1 });
t3.to(light, { intensity: 0, duration: 1, ease: "power1.out" }, 1);


const t4 = gsap.timeline({
  yoyo: false,
  repeat: -1,
});
t4.fromTo(light4.position, { x: 950 }, { x: 800, duration: 0.7 });
t4.fromTo(
  light4,
  { intensity: 0 },
  { intensity: 2.6, duration: 0.7, ease: "power1.in" },
  0
);
t4.to(light4.position, { x: 950, duration: 0.7 });
t4.to(light4, { intensity: 0, duration: 0.7, ease: "power1.out" }, 0.7);

function animate(time) {
  controls.update();
  camera.lookAt(0, 500, 0);
  renderer.render(scene, camera);
}
