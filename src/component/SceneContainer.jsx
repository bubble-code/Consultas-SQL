import { Suspense } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera, } from "@react-three/drei";
import { FloatingIsland } from "./FloatingIsland";
import { Rock } from "./Rock";

// import bgHDR from '../assets/bg.hdr';
function Rig() {
  const camera = useThree((state) => state.camera)
  return useFrame(({ clock }) => {
    camera.rotation.x = Math.sin(clock.elapsedTime * 0.9) * 0.1
    // camera.rotation.y = clock.getElapsedTime() * 0.01
    // camera.rotation.z = clock.getElapsedTime() * 0.1
  })

}

export const SceneContainer = () => {
  return (
    <Suspense fallback={null}>
      <Environment background={'only'} files={'bg.hdr'} />
      <Environment background={false} files={'envmap.hdr'} />
      <PerspectiveCamera makeDefault fov={50} position={[-1.75, 8.85, 20.35]} />
      <OrbitControls target={[1, 5, 0]} maxPolarAngle={Math.PI * 0.5} />
      {/* <mesh position={[-8, 40, 2]} rotation={[-0, -0, 0]}> */}
      <FloatingIsland />
      <Rock />
      {/* <Rock /> */}
      <Rig />
      {/* </mesh> */}
    </Suspense>
  )
}
