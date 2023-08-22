import { Sparkles } from '@react-three/drei';
import { RigidBody, CuboidCollider } from '@react-three/rapier';

export default function Floor() {
  return (
    <group>
      <Sparkles
        color='#90caf9'
        count={200}
        size={5}
        speed={0.5}
        scale={[8, 5, 20]}
        position-y={2}
      />
      <RigidBody type='fixed' friction={2}>
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color='#878790' metalness={0.2} />
        </mesh>
      </RigidBody>
      <RigidBody colliders={false} type='fixed' name='void' sensor>
        <mesh position={[0, -1, 0]}>
          <planeGeometry args={[12, 12]} />
          <meshBasicMaterial visible={false} />
          <CuboidCollider position={[0, -1, 0]} args={[12, 0.1, 12]} sensor />
        </mesh>
      </RigidBody>
    </group>
  );
}
