import simulationVertexShader from './simulationVertexShader';
import simulationFragmentShader from './simulationFramentShader';
import * as THREE from "three";

const getRandomData = (width, height) => {
    // we need to create a vec4 since we're passing the positions to the fragment shader
    // data textures need to have 4 components, R, G, B, and A
    const length = width * height * 4
    const data = new Float32Array(length);

    for (let i = 0; i < length; i++) {
        const stride = i * 4;

        const distance = Math.sqrt((Math.random() - 0.5)) * 2.0;
        const theta = THREE.MathUtils.randFloatSpread(360);
        const phi = THREE.MathUtils.randFloatSpread(360);

        data[stride] = distance * Math.sin(theta) * Math.cos(phi)
        data[stride + 1] = distance * Math.sin(theta) * Math.sin(phi);
        data[stride + 2] = distance * Math.cos(theta);
        data[stride + 3] = 1.0; // this value will not have any impact
    }

    return data;
}

// ------------------------------------------------------------------------------------------------
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform vec3 color;
  varying vec2 vUv;
  void main() {
    if (abs(vUv.x - 0.5) + abs(vUv.y - 0.5) < 0.5) {
      gl_FragColor = vec4(color, 1.0);
    } else {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
  }
`;
// ------------------------------------------------------------------------------------------------
class SimulationMaterial extends THREE.ShaderMaterial {
    constructor(size) {
        const positionsTexture = new THREE.DataTexture(
            getRandomData(size, size),
            size,
            size,
            THREE.RGBAFormat,
            THREE.FloatType
        );
        positionsTexture.needsUpdate = true;

        const simulationUniforms = {
            positions: { value: positionsTexture },
            uFrequency: { value: 0.25 },
            uTime: { value: 0 },
        };

        super({
            uniforms: simulationUniforms,
            vertexShader: simulationVertexShader,
            fragmentShader: simulationFragmentShader,

            // uniforms: {
            //     color: { value: new THREE.Color(0xff0000) },
            //     positions: { value: positionsTexture },
            //     uFrequency: { value: 0.25 },
            //     uTime: { value: 0 },
            // },
            // vertexShader,
            // fragmentShader
        });
    }
}

export default SimulationMaterial;
