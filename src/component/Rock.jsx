import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Rock = () => {
  const gltf = useLoader(GLTFLoader, 'rocks.glb');
  return (
    <primitive object={gltf.scene} />
  )
};