/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/scripts/shader.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/scripts/shader.js":
/*!**********************************!*\
  !*** ./src/js/scripts/shader.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

let scene;
let camera;
let renderer;
let sceneObjects = [];
let uniforms = {};

function perlinNoise() {
  return `
        vec3 mod289(vec3 x) {
            return x - floor(x * (1.0 / 289.0)) * 289.0;
        }

        vec4 mod289(vec4 x) {
            return x - floor(x * (1.0 / 289.0)) * 289.0;
        }

        vec4 permute(vec4 x) {
            return mod289(((x*34.0)+1.0)*x);
        }

        vec4 taylorInvSqrt(vec4 r) {
            return 1.79284291400159 - 0.85373472095314 * r;
        }

        float snoise(vec3 v) {
            const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
            const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

            // First corner
            vec3 i  = floor(v + dot(v, C.yyy) );
            vec3 x0 =   v - i + dot(i, C.xxx) ;

            // Other corners
            vec3 g = step(x0.yzx, x0.xyz);
            vec3 l = 1.0 - g;
            vec3 i1 = min( g.xyz, l.zxy );
            vec3 i2 = max( g.xyz, l.zxy );

            vec3 x1 = x0 - i1 + C.xxx;
            vec3 x2 = x0 - i2 + C.yyy;
            vec3 x3 = x0 - D.yyy;     

            // Permutations
            i = mod289(i);
            vec4 p = permute( permute( permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                    + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                        + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

            // Gradients: 7x7 points over a square, mapped onto an octahedron.
            // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
            float n_ = 0.142857142857;
            vec3  ns = n_ * D.wyz - D.xzx;

            vec4 j = p - 49.0 * floor(p * ns.z * ns.z); 

            vec4 x_ = floor(j * ns.z);
            vec4 y_ = floor(j - 7.0 * x_ );  

            vec4 x = x_ *ns.x + ns.yyyy;
            vec4 y = y_ *ns.x + ns.yyyy;
            vec4 h = 1.0 - abs(x) - abs(y);

            vec4 b0 = vec4( x.xy, y.xy );
            vec4 b1 = vec4( x.zw, y.zw );

            vec4 s0 = floor(b0)*2.0 + 1.0;
            vec4 s1 = floor(b1)*2.0 + 1.0;
            vec4 sh = -step(h, vec4(0.0));

            vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
            vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

            vec3 p0 = vec3(a0.xy,h.x);
            vec3 p1 = vec3(a0.zw,h.y);
            vec3 p2 = vec3(a1.xy,h.z);
            vec3 p3 = vec3(a1.zw,h.w);

            //Normalise gradients
            vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
            p0 *= norm.x;
            p1 *= norm.y;
            p2 *= norm.z;
            p3 *= norm.w;

            // Mix final noise value
            vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
            m = m * m;
            return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                            dot(p2,x2), dot(p3,x3) ) );
        }
    `;
}

function fragmentShader() {
  return `
        precision mediump float;
        uniform float u_time;
        uniform vec2  u_resolution;
        uniform vec2 u_mouse;
        uniform vec2 c_mouse;

        void main(){
            vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
            vec2 p_mouse = (u_mouse.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);

            float noise = (snoise(vec3(1.0, 1.0, u_time / 3.0)) + 1.0) / 2.0;


            float offset = (1.0 / length(vec2(p.x - p_mouse.x, p.y + p_mouse.y))) * noise / 2.0;

            vec3 rgb_color = vec3(
                (snoise(vec3(p.x / 3.0, p.y / 3.0, u_time / 1.1)) + 0.1),
                (snoise(vec3(p.x / 2.0, p.y / 2.0, u_time / 1.2)) + 0.1),
                (snoise(vec3(p.x / 5.0, p.y / 5.0, u_time / 1.3)) + 1.0) / 2.0 + offset
            );

            gl_FragColor = vec4(rgb_color, 1.0);
        }
    `;
}

function init() {
  const container = document.getElementById('canvas');
  scene = new THREE.Scene();
  camera = new THREE.Camera();
  camera.position.z = 1;
  const geometry = new THREE.PlaneBufferGeometry(2, 2);
  const uniforms = {
    u_time: {
      type: 'f',
      value: 100.0
    },
    u_resolution: {
      type: 'v2',
      value: new THREE.Vector2()
    },
    u_mouse: {
      type: 'v2',
      value: new THREE.Vector2()
    },
    c_mouse: {
      type: 'v2',
      value: new THREE.Vector2()
    }
  };
  const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    fragmentShader: [perlinNoise(), fragmentShader()].join('\n')
  });
  const mesh = new THREE.Mesh(geometry, material);
  let mouseY = 0;
  let mouseX = 0;
  const renderer = new THREE.WebGLRenderer({
    canvas: container
  });
  renderer.setSize(renderer.domElement.width, renderer.domElement.height);
  window.addEventListener('resize', setSize, false);
  document.addEventListener('mousemove', event => {
    mouseX = event.pageX;
    mouseY = event.pageY;
  }, false);
  document.body.appendChild(renderer.domElement);
  scene.add(mesh);
  setSize();
  animate();

  function setSize() {
    container.width = window.innerWidth;
    container.height = window.innerHeight;
    renderer.setSize(renderer.domElement.width, renderer.domElement.height);
    uniforms.u_resolution.value.x = renderer.domElement.width;
    uniforms.u_resolution.value.y = renderer.domElement.height;
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function render() {
    uniforms.u_time.value += 0.005;
    uniforms.u_mouse.value.x += (mouseX - uniforms.u_mouse.value.x) / 30;
    uniforms.u_mouse.value.y += (mouseY - uniforms.u_mouse.value.y) / 30;
    renderer.render(scene, camera);
  }
}

init();

/***/ })

/******/ });
//# sourceMappingURL=shader.js.map