import { useRef } from 'react';
import { Mesh, Group, MeshStandardMaterial } from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Float } from '@react-three/drei';

export default function Airplane() {
  interface nodesType {
    nodes?: {
      PUSHILIN_Plane_Circle000: Mesh;
      PUSHILIN_Plane_Helix: Mesh;
      Scene: Group;
    };
    materials?: {
      plane: MeshStandardMaterial;
    };
  }

  const { nodes, materials } = useGLTF('/Models/Airplane.glb') as nodesType;
  const HELIX_SPEED = 6;
  const helixRef = useRef<Mesh>(null!);

  useFrame((_state, delta) => {
    if (helixRef) {
      helixRef.current.rotation.x += delta * HELIX_SPEED;
    }
  });

  return (
    <Float floatIntensity={2} speed={2}>
      <group>
        <mesh
          geometry={nodes?.PUSHILIN_Plane_Circle000.geometry}
          material={materials?.plane}
        />
        <mesh
          ref={helixRef}
          geometry={nodes?.PUSHILIN_Plane_Helix.geometry}
          material={materials?.plane}
          position={[1.09, 0.23, 0]}
        />
      </group>
    </Float>
  );
}
