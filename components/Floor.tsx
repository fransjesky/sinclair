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
        scale={[8, 3, 10]}
        speed={0.5}
        count={50}
        position-y={1}
      />
      <mesh
        position={[0, -1, 0]}
        receiveShadow
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <planeGeometry args={[10, 10]} />
        <MeshReflectorMaterial
          color='#a0a0a0'
          blur={[300, 100]}
          resolution={1024}
          mirror={0.5}
          mixBlur={6}
          mixStrength={20}
          roughness={1}
          metalness={0.2}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={new Vector2(2, 2)}
        />
      </mesh>
    </>
  );
}
