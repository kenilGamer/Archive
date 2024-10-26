  // import './styles.css'
  // import * as THREE from 'three'
  // import * as Shader3 from "shader3";
  // import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
  // import { MeshHolographicMaterial } from "shader3";
  // import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  // import Microphone from './Microphone.js'; // Import the Microphone class
  // const microphone = new Microphone(); 
  // // Speech Recognition
  // const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  // recognition.continuous = true;
  // recognition.onresult = (event) => {
  //   const transcript = event.results[0][0].transcript;
    
  //   console.log(transcript);
  //   // Interpret speech and trigger animation
  //   const moveElement = transcript.includes('move right') ? moveElementRight : transcript.includes('move left') ? moveElementLeft : null;
  //   moveElement?.();
  // };

  // recognition.start();

  // // Animation (using GSAP)
  // function moveElementRight() {
  //   gsap.to('#myElement', { x: 200, duration: 1 });
  // }

  // function moveElementLeft() {
  //   gsap.to('#myElement', { x: -200, duration: 1 });
  // }

  // const hdrLoader = new RGBELoader();
  // hdrLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/rogland_clear_night_1k.hdr', texture => {
  //   texture.mapping = THREE.EquirectangularReflectionMapping;
  //   texture.colorSpace = THREE.SRGBColorSpace;
  //   scene.environment = scene.background = texture;
  // });

  // const textureLoader = new THREE.TextureLoader();
  // const texture = textureLoader.load('../public/rock_face_03_2k.gltf/textures/rock_face_03_diff_2k.jpg'); // Load your texture here

  // const scene = new THREE.Scene()
  // const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000)
  // camera.position.z = 5

  // const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  // renderer.setSize(window.innerWidth, window.innerHeight)
  // document.body.appendChild(renderer.domElement)
  // const audioContext = new AudioContext()

  // const listener = new THREE.AudioListener();
  // // listener.connect(audioContext.destination);
  // console.log(listener);  



  // camera.add(listener);

  // const controls = new OrbitControls(camera, renderer.domElement)
  // const uniforms = { time: { value: 0.0 }, mouse: { value: new THREE.Vector2() }, levels: { value: 0 } }
  // const material = new Shader3.MeshPhysicalMaterial({
  //   vertexShader: `
  //     uniform vec2 mouse;
  //       uniform float time; 
  //       uniform float levels;
  //       ${Shader3.perlin}
  //     void main () {
  //       s3_position.y += perlin(vec3(s3_position.x, s3_position.y, time)) * levels ;
        
  //       s3_position.x += sin(mouse.x * 1.) * 0.7;
  //       s3_position.z += cos(mouse.y * 1.) * 0.7;
  //       gl_Position = projectionMatrix * modelViewMatrix * vec4(s3_position, 4.0);
  //       gl_PointSize = 1.0;
  //     }
  //   `,
  //   uniforms: uniforms,
  //   transmission: 1,
  //   metalness: 0,
  //   roughness: 0.0,
  //   ior: 1.07,    
  //   thickness: 1,
  //   iridescence: 1,
  //   iridescenceIOR: 0.3,
  //   iridescenceThickness: 1,
  //   transparent: true,
  //   alpha: true,
  //   // opacity: 0.5,
  //   depthTest: false,
  //   depthWrite: false,
  //   side: THREE.DoubleSide,
  //   onBeforeCompile: (shader) => {
  //     shader.uniforms.mouse = shader.uniforms.mouse;
  //   },
    
  // });
  // console.log(uniforms,material);

  // scene.add(new THREE.Mesh(new THREE.SphereGeometry(2, 500, 500), material))
  // // const material2 = new Shader3.MeshPhysicalMaterial({
  // //   // set parameters optional
  // //   vertexShader: `
  // //   uniform vec2 mouse;
  // //   uniform float time; 
  // //   ${Shader3.perlin}
  // //   void main () {
  // //     // s3_position.y += perlin(vec3(s3_position.x, s3_position.y, time)) * .2;
  // //     s3_position.x += sin(mouse.x * 1.) * 0.7;
  // //     s3_position.z += cos(mouse.y * 1.) * 0.7;
  // //     gl_Position = projectionMatrix * modelViewMatrix * vec4(s3_position, 4.0);
  // //     // gl_PointSize = 1.0;
  // //   }
  // // `,
  // // uniforms: uniforms,
  // //   transmission: 1,
  // //   metalness: 0,
  // //   roughness: 0.0,
  // //   ior: 1.07,    
  // //   thickness: 1,
  // //   iridescence: 1,
  // //   iridescenceIOR: 0.3,
  // //   iridescenceThickness: 1,
  // //   transparent: true,
  // //   alpha: true,
  // //   depthTest: false,
  // //   depthWrite: false,
  // //   side: THREE.DoubleSide,
  // //   color: "#C30Cff",
  // //   emissive: "#C30Cff",
  // //   emissiveIntensity: 1,
  // //   fresnelExponent:4,
  // // });

  // // scene.add(new THREE.Mesh(new THREE.SphereGeometry(2, 500, 500), material2))

  // const fit = () => {
  //   camera.aspect = window.innerWidth / window.innerHeight
  //   camera.updateProjectionMatrix()
  //   renderer.setSize(window.innerWidth, window.innerHeight)
  //   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  // }

  // window.addEventListener('resize', fit)

  // let mouse = { x: 0, y: 0 }
  // const clock = new THREE.Clock()
  // // Initialize the microphone
  // console.log(microphone);
  // if (microphone.ready) {
  //   microphone.connect(listener);
  //   console.log('connected');
  // }
  // // microphone.start = true;
  // microphone.debug = true;


  // const animate = () => {
  //   material.time = clock.getElapsedTime();
  //   controls.update();
  //   microphone.update(); // Update microphone data
  //   renderer.render(scene, camera);
  //   // console.log(microphone.update());
  //   material.levels ;
  //   const mainLevels = microphone.levels.forEach(element => {
  //     setTimeout(() => {
  //       uniforms.levels.value = element * 4;
  //       // console.log(uniforms.levels.value);
  //     }, 100);
  //   });
    
  //   // console.log(material.levels);
  //   material.mouse = new THREE.Vector2(mouse.x, mouse.y);
  //   requestAnimationFrame(animate);
  //   // console.log(material.mouse);
  // }
  // // console.log(microphone.levels);
  // document.addEventListener('mousemove', (event) => {
  //   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  //   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  // });

  // fit()
  // animate()
  import './styles.css';
  import * as THREE from 'three';
  import * as Shader3 from "shader3";
  import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
  import { MeshHolographicMaterial } from "shader3";
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  import Microphone from './Microphone.js'; // Import the Microphone class
  
  // Initialize microphone
  const microphone = new Microphone(); 
  
  // Speech Recognition Setup
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.continuous = true;
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    console.log(transcript);
    if (transcript.includes('move right')) moveElementRight();
    if (transcript.includes('move left')) moveElementLeft();
  };
  recognition.start();
  
  // Animation (using GSAP for DOM elements)
  function moveElementRight() {
    gsap.to('#myElement', { x: 200, duration: 1 });
  }
  function moveElementLeft() {
    gsap.to('#myElement', { x: -200, duration: 1 });
  }
  
  // HDR Environment
  const hdrLoader = new RGBELoader();
  hdrLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/rogland_clear_night_1k.hdr', texture => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.colorSpace = THREE.SRGBColorSpace;
    scene.environment = scene.background = texture;
  });
  
  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;
  
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  // Audio context
  const audioContext = new AudioContext();
  const listener = new THREE.AudioListener();
  camera.add(listener);
  
  const controls = new OrbitControls(camera, renderer.domElement);
  
  // Shader uniforms and material
  const uniforms = {
    time: { value: 0.0 },
    mouse: { value: new THREE.Vector2() },
    levels: { value: 0 }
  };
  
  const material = new Shader3.MeshPhysicalMaterial({
    vertexShader: `
      uniform vec2 mouse;
      uniform float time; 
      uniform float levels;
      ${Shader3.perlin}
      void main () {
        s3_position.y += perlin(vec3(s3_position.x, s3_position.y, time)) * levels;
        s3_position.x += sin(mouse.x * 1.0) * 0.7;
        s3_position.z += cos(mouse.y * 1.0) * 0.7;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(s3_position, 4.0);
        gl_PointSize = 1.0;
      }
    `,
    uniforms: uniforms,
    transmission: 1,
    metalness: 0,
    roughness: 0.0,
    ior: 1.07,
    thickness: 1,
    iridescence: 1,
    iridescenceIOR: 0.3,
    iridescenceThickness: 1,
    transparent: true,
    depthTest: false,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  
  scene.add(new THREE.Mesh(new THREE.SphereGeometry(2, 500, 500), material));
  
  // Resize handler
  const fit = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };
  window.addEventListener('resize', fit);
  
  let mouse = { x: 0, y: 0 };
  const clock = new THREE.Clock();
  
  // Initialize microphone connection
  if (microphone.ready) {
    microphone.connect(listener);
    console.log('Microphone connected');
  }
  
  
  // Animate function
  const animate = () => {
    uniforms.time.value = clock.getElapsedTime();
    controls.update();
    microphone.update(); // Update microphone data
  
    // Apply microphone levels to shader uniform
    if (microphone.levels && microphone.levels.length > 0) {
      const averageLevel = microphone.levels.reduce((acc, level) => acc + level, 0) / microphone.levels.length;
      uniforms.levels.value = averageLevel * 4;
    }
  
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  
  // Mouse move handler
  document.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    uniforms.mouse.value.set(mouse.x, mouse.y);
  });
  
  fit();
  animate();
  