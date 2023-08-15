import { useEffect, useState } from 'react';
import { Sparkles } from '@react-three/drei';
import { RigidBody, CuboidCollider } from '@react-three/rapier';

export default function Floor() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    window.innerWidth <= 600 ? setMobile(true) : setMobile(false);
  }, []);

  return (
    <group>
      {!mobile && (
        <Sparkles
          color='#e3f2fd'
          size={5}
          speed={0.5}
          scale={[10, 3, 25]}
          position-y={1.5}
        />
      )}
      <RigidBody type='fixed' friction={2}>
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color='#878790' />
        </mesh>
      </RigidBody>
      <RigidBody colliders={false} type='fixed' name='void' sensor>
        <mesh position={[0, -1.25, 0]}>
          <planeGeometry args={[15, 15]} />
          <meshBasicMaterial visible={false} />
          <CuboidCollider position={[0, -1, 0]} args={[15, 0.1, 15]} sensor />
        </mesh>
      </RigidBody>
    </group>
  );
}
