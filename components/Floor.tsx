import { useEffect, useState } from 'react';
import { Vector2 } from 'three';
import { useTexture, MeshReflectorMaterial, Sparkles } from '@react-three/drei';

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
        <Sparkles size={5} scale={[8, 3, 25]} speed={0.5} position-y={1} />
      )}
      <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <planeGeometry args={[10, 10]} />
        <MeshReflectorMaterial
          color='#a0a0a0'
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
    </group>
  );
}
