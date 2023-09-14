import { useRef, useEffect, useState } from 'react';
import { DoubleSide, Group, TextureLoader } from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  image: string;
  nodes: {
    Cube008: THREE.Mesh;
    Cube008_1: THREE.Mesh;
    Cube008_2: THREE.Mesh;
    keyboard: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube002_1: THREE.Mesh;
    touchbar: THREE.Mesh;
  };
  materials: {
    aluminium: THREE.MeshStandardMaterial;
    ['matte.001']: THREE.MeshStandardMaterial;
    ['screen.001']: THREE.MeshStandardMaterial;
    keys: THREE.MeshStandardMaterial;
    trackpad: THREE.MeshStandardMaterial;
    touchbar: THREE.MeshStandardMaterial;
  };
};

useGLTF.preload('Models/mac-draco.glb');

export const Laptop = (props: any) => {
  const [projectScreen, setProjectScreen] = useState<any>(null!);
  const group = useRef<Group>(null!);

  // Load model
  const { nodes, materials } = useGLTF('Models/mac-draco.glb') as GLTFResult;

  useEffect(() => {
    const loader = new TextureLoader();
    loader.load(`/assets/${props.image}`, (texture) => {
      setProjectScreen(texture);
    });
  }, [props.image]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation-x={-0.125} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes['Cube008'].geometry}
          />
          <mesh
            material={materials['matte.001']}
            geometry={nodes['Cube008_1'].geometry}
          />
          <mesh
            geometry={nodes['Cube008_2'].geometry}
            position={[0, 0.075, -0.175]}
            rotation={[0, -Math.PI, -Math.PI]}
          >
            {projectScreen && (
              <meshStandardMaterial map={projectScreen} side={DoubleSide} />
            )}
          </mesh>
        </group>
      </group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes['Cube002'].geometry}
        />
        <mesh
          material={materials.trackpad}
          geometry={nodes['Cube002_1'].geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
};
