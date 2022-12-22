import { useLoader } from '@react-three/fiber';
import { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const Tree = () => {

  const tree = useLoader(GLTFLoader, 'trees.glb');

  useEffect(() => {
    if (!tree) return;
    let mesh = tree.scene.children[0];
    mesh.material.envMapIntensity = 2.5;
  }, [tree])

  return (
    <primitive object={tree.scene} />
  )

};