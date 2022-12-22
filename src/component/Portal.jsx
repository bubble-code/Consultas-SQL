import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect } from "react";
import { DoubleSide } from "three";


export const Portal = () => {
  const model = useLoader(GLTFLoader, 'portal.glb');
  const mask = useLoader(GLTFLoader, 'portal_mask.glb');

  useEffect(() => {
    if (!model) return;
    let mesh = model.scene.children[0];
    mesh.material.envMapIntensity = 3.5;

    let mesMask = mask.scene.children[0];
    mesMask.material.side = DoubleSide;

  }, [model, mask]);

  return (
    <>
      <primitive object={model.scene} />
      <primitive object={mask.scene} />
    </>
  )
}