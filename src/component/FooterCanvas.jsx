import * as THREE from 'three';
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";



export const FooterCanvas = () => {
  const pointsRef = useRef();
  const pointTexture = useLoader(THREE.TextureLoader, 'circle.png');
  const count = 2000;
  const paticulesPosition = useMemo(() => {
    const position = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      let x = (Math.random() - 0.5) * 2;
      let y = (Math.random() - 0.5) * 2;
      let z = (Math.random() - 0.5) * 2;
      position.set([x, y, z], i * 3);
    }
    return position;
  }, [count])

  return (
    <points ref={pointsRef}>
      <bufferGeometry attach='geometry' >
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={paticulesPosition}
          itemSize={3}
          normalized={false}
        />
      </bufferGeometry>

      <pointsMaterial color="#5786f5" size={0.015} sizeAttenuation transparent map={pointTexture} />
    </points>
  )

};