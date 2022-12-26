import * as THREE from 'three';
import { OrbitControls, useFBO } from "@react-three/drei";
import { Canvas, createPortal, extend, useFrame, useLoader } from "@react-three/fiber";
import { Fragment, useEffect, useMemo, useRef } from "react";
// import fragmentShader from "../lib/fragmentShader.glsl";
// import vertexShader from "../lib/vertexShader.glsl";
// import fragmentShader from "../lib/fragmentShader";
// import vertexShader from "../lib/vertexShader";
import SimulationMaterial from '../lib/SimulationMaterial';
import vertexShader from "../lib/vertexShader";
import fragmentShader from "../lib/fragmentShader";

// extend({ SimulationMaterial: SimulationMaterial });

export const FooterCanvas = (props) => {
  let pointsRef = useRef();
  const pointTexture = useLoader(THREE.TextureLoader, 'circle.png');
  const positions = new Float32Array(4 * 3); // an array of 3D positions for each particle
  // for (let i = 0; i < 10000; i++) {
  //   const x = Math.random()  - 1;
  //   const y = Math.random()  - 1;
  //   const z = Math.random()  - 1;
  //   positions.set([x, y, z], i * 3);
  //   // positions[i * 3] = x;
  //   // positions[i * 3 + 1] = y;
  //   // positions[i * 3 + 2] = z;
  // }
  positions.set([-1, 0, 0]);
  positions.set([0, 1, 0]);
  positions.set([1, 0, 0]);
  positions.set([0, -1, 0]);

  useFrame(() => {
    pointsRef.current.rotation.z += 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry >
        <bufferAttribute
          attach="attributes-position"
          count={4}
          array={positions}
          itemSize={3}
          normalized={false}

        />
      </bufferGeometry>


     
    </points>

  );
  // const size = 128;

  // const points = useRef();
  // const simulationMaterialRef = useRef();

  // const scene = new THREE.Scene();
  // const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1);
  // const positions = new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0]);
  // const uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]);

  // const renderTarget = useFBO(size, size, {
  //   minFilter: THREE.NearestFilter,
  //   magFilter: THREE.NearestFilter,
  //   format: THREE.RGBAFormat,
  //   stencilBuffer: false,
  //   type: THREE.FloatType,
  // });

  // const particlesPosition = useMemo(() => {
  //   const length = size * size;
  //   const particles = new Float32Array(length * 3);
  //   for (let i = 0; i < length; i++) {
  //     let i3 = i * 3;
  //     particles[i3 + 0] = (i % size) / size;
  //     particles[i3 + 1] = i / size / size;
  //   }
  //   return particles;
  // }, [size]);

  // const uniforms = useMemo(() => ({
  //   uPositions: {
  //     value: null,
  //   }
  // }), [])

  // useFrame((state) => {
  //   const { gl, clock } = state;

  //   gl.setRenderTarget(renderTarget);
  //   gl.clear();
  //   gl.render(scene, camera);
  //   gl.setRenderTarget(null);

  //   points.current.material.uniforms.uPositions.value = renderTarget.texture;

  //   simulationMaterialRef.current.uniforms.uTime.value = clock.elapsedTime;
  // });

  // ------------------------------------------------------------------------------------------------
  // const vertexShader1 = `
  // varying vec2 vUv;
  // void main() {
  //   vUv = uv;
  //   gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  // }
  // `;

  // const fragmentShader1 = `
  // uniform vec3 color;
  // varying vec2 vUv;
  // void main() {
  //   if (abs(vUv.x - 0.5) + abs(vUv.y - 0.5) < 0.5) {
  //     gl_FragColor = vec4(color, 1.0);
  //   } else {
  //     gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
  //   }
  // }
  // `;
  // ------------------------------------------------------------------------------------------------

  // return (
  //   <>
  //     {
  //       createPortal(
  //         <mesh>
  //           <simulationMaterial ref={simulationMaterialRef} args={[size]} />
  //           <bufferGeometry>
  //             <bufferAttribute
  //               attach="attributes-position"
  //               count={positions.length / 3}
  //               array={positions}
  //               itemSize={3}
  //             />
  //             <bufferAttribute
  //               attach="attributes-uv"
  //               count={uvs.length / 2}
  //               array={uvs}
  //               itemSize={2}
  //             />
  //           </bufferGeometry>
  //         </mesh>,
  //         scene
  //       )}
  //     <points ref={points}>
  //       <bufferGeometry>
  //         <bufferAttribute
  //           attach="attributes-position"
  //           count={particlesPosition.length / 3}
  //           array={particlesPosition}
  //           itemSize={3}
  //         />
  //       </bufferGeometry>
  //       <shaderMaterial
  //         blending={THREE.AdditiveBlending}
  //         depthWrite={false}
  //         fragmentShader={fragmentShader}
  //         vertexShader={vertexShader}
  //         uniforms={uniforms}
  //       />
  //     </points>
  //   </>
  // );
};

// const { count } = props;
// const radius = 3;
// const points = useRef();

// const particlesPosition = useMemo(() => {
//   const positions = new Float32Array(count * 3);

//   for (let i = 0; i < count; i++) {
//     const distance = Math.sqrt((Math.random() - 0.5)) * radius;
//     const theta = THREE.MathUtils.randFloatSpread(360);
//     const phi = THREE.MathUtils.randFloatSpread(360);

//     let x = distance * Math.sin(theta) * Math.cos(phi)
//     let y = distance * Math.sin(theta) * Math.sin(phi);
//     let z = distance * Math.cos(theta);

//     positions.set([x, y, z], i * 3);
//   }

//   return positions;
// }, [count]);

// const uniforms = useMemo(() => ({
//   uTime: {
//     value: 0.0
//   },
//   uRadius: {
//     value: radius
//   }
// }), [])

// useFrame((state) => {
//   const { clock } = state;
//   points.current.material.uniforms.uTime.value = clock.elapsedTime;
// });

// return (
//   <points ref={points}>
//     <bufferGeometry>
//       <bufferAttribute
//         attach="attributes-position"
//         count={particlesPosition.length / 3}
//         array={particlesPosition}
//         itemSize={3}
//       />
//     </bufferGeometry>
//     <shaderMaterial
//       blending={THREE.AdditiveBlending}
//       depthWrite={false}
//       fragmentShader={fragmentShader}
//       vertexShader={vertexShader}
//       uniforms={uniforms}
//     />
//   </points>
// );

// export const FooterCanvas = ({ count, shape }) => {
//   const pointsRef = useRef();
  // const pointTexture = useLoader(THREE.TextureLoader, 'circle.png');
  // const count = 2000;
  // const radius = 1;
  // const paticulesPosition = useMemo(() => {
    // const position = new Float32Array(count * 3);
    // if (shape === 'box') {
    //   for (let i = 0; i < count; i++) {
    //     let x = (Math.random() - 0.5) * 2;
    //     let y = (Math.random() - 0.5) * 2;
    //     let z = (Math.random() - 0.5) * 2;
    //     position.set([x, y, z], i * 3);
    //   }
    // }
    // if (shape === 'sphere') {
    //   for (let i = 0; i < count; i++) {
    //     const thate = THREE.MathUtils.randFloatSpread(360)
    //     const phi = THREE.MathUtils.randFloatSpread(360);

    //     let x = radius * Math.sin(thate) * Math.cos(phi);
    //     let y = radius * Math.sin(thate) * Math.sin(phi);
    //     let z = radius * Math.cos(thate)
    //     position.set([x, y, z], i * 3)
    //   }

    // }
  //   const positions = new Float32Array(count * 3);

  //   for (let i = 0; i < count; i++) {
  //     const distance = Math.sqrt((Math.random() - 0.5)) * radius;
  //     const theta = THREE.MathUtils.randFloatSpread(360);
  //     const phi = THREE.MathUtils.randFloatSpread(360);

  //     let x = distance * Math.sin(theta) * Math.cos(phi)
  //     let y = distance * Math.sin(theta) * Math.sin(phi);
  //     let z = distance * Math.cos(theta);

  //     positions.set([x, y, z], i * 3);
  //   }
  //   return positions;
  // }, [count, shape])

  // useEffect(() => {
  //   console.log('mioo', pointsRef.current)
  // }, [])

  // useFrame((state) => {
  //   const { clock } = state;

  //   for (let i = 0; i < count; i++) {
  //     const i3 = i * 3;


  //     pointsRef.current.geometry.attributes.position.array[i3] += Math.sin(clock.elapsedTime + Math.random() * 10) * 0.01;
  //     pointsRef.current.geometry.attributes.position.array[i3 + 1] += Math.cos(clock.elapsedTime + Math.random() * 10) * 0.01;
  //     pointsRef.current.geometry.attributes.position.array[i3 + 2] += Math.sin(clock.elapsedTime + Math.random() * 10) * 0.01;
  //   }

  //   pointsRef.current.geometry.attributes.position.needsUpdate = true;
  // });

  // const uniforms = useMemo(() => ({
  //   uTime: {
  //     value: 0.0
  //   },
  //   uRadius: {
  //     value: radius
  //   }
  // }), [])

  // useFrame((state) => {
  //   const { clock } = state;

  //   pointsRef.current.material.uniforms.uTime.value = clock.elapsedTime;
  // });

//   return (
//     <points ref={pointsRef}>
//       <bufferGeometry >
//         <bufferAttribute
//           attach="attributes-position"
//           count={count}
//           array={paticulesPosition}
//           itemSize={3}
//           normalized={false}
//         />
//       </bufferGeometry>
//       <shaderMaterial
//         blending={THREE.AdditiveBlending}
//         depthWrite={false}
//         fragmentShader={fragmentShader}
//         vertexShader={vertexShader}
//         uniforms={uniforms}
//       />

//       {/* <pointsMaterial color="#5786f5" size={0.015} sizeAttenuation transparent map={pointTexture} />*/}
//     </points>
//   )

// };