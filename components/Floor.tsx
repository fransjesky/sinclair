import { useEffect, useState } from 'react';
import { Vector2 } from 'three';
import { useTexture, MeshReflectorMaterial, Sparkles } from '@react-three/drei';
import { RigidBody, CuboidCollider } from '@react-three/rapier';

export default function Floor() {
  const [floor, normal] = useTexture([
    '/Textures/SurfaceImperfections/rough.jpg',
    '/Textures/SurfaceImperfections/normal.jpg',
  ]);

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    window.innerWidth <= 600 ? setMobile(true) : setMobile(false);
  }, []);

  return (
    <group>
      {!mobile && (
        <Sparkles size={5} scale={[10, 2, 25]} speed={0.5} position-y={1} />
      )}
      <RigidBody type='fixed' friction={2}>
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <planeGeometry args={[10, 10]} />
          <MeshReflectorMaterial
            color='#878790'
            blur={[400, 100]}
            resolution={1024}
            mirror={0.5}
            mixBlur={6}
            mixStrength={3}
            roughnessMap={floor}
            normalMap={normal}
            normalScale={new Vector2(10, 10)}
          />
        </mesh>
      </RigidBody>
      <RigidBody colliders={false} type='fixed' name='void' sensor>
        <mesh position={[0, -2, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshBasicMaterial visible={false} />
          <CuboidCollider position={[0, -2, 0]} args={[50, 0.1, 50]} sensor />
        </mesh>
      </RigidBody>
    </group>
  );
}
