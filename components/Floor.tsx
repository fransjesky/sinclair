import { Vector2 } from 'three';
import { useTexture, MeshReflectorMaterial, Sparkles } from '@react-three/drei';

export default function Floor() {
  const [floor, normal] = useTexture([
    '/Textures/SurfaceImperfections/rough.jpg',
    '/Textures/SurfaceImperfections/normal.jpg',
  ]);

  return (
    <>
      <Sparkles
        size={3}
        scale={[10, 2, 20]}
        speed={0.25}
        count={50}
        position-y={1.2}
      />
      <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <planeGeometry args={[10, 10]} />
        <MeshReflectorMaterial
          color='#a0a0a0'
          blur={[400, 100]}
          resolution={1024}
          mirror={0.5}
          mixBlur={6}
          mixStrength={10}
          roughness={0.8}
          metalness={0.4}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={new Vector2(2, 2)}
        />
      </mesh>
    </>
  );
}
