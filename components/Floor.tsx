import { Vector2 } from 'three';
import { useTexture, Reflector, Sparkles } from '@react-three/drei';
import { MeshReflectorMaterialProps } from '@react-three/drei/materials/MeshReflectorMaterial';

export default function Floor() {
  const [floor, normal] = useTexture([
    '/Textures/SurfaceImperfections/rough.jpg',
    '/Textures/SurfaceImperfections/normal.jpg',
  ]);

  return (
    <>
      <Sparkles size={5} scale={[8, 2, 5]} speed={0.2} count={30} />
      <Reflector
        blur={[400, 100]}
        resolution={1024}
        args={[10, 10]}
        mirror={0.5}
        mixBlur={6}
        mixStrength={1.5}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        position={[0, -1, 0]}
      >
        {(Material: React.ElementType, props: MeshReflectorMaterialProps) => (
          <Material
            color='#a0a0a0'
            metalness={0.2}
            roughnessMap={floor}
            normalMap={normal}
            normalScale={new Vector2(2, 2)}
            {...props}
          />
        )}
      </Reflector>
    </>
  );
}
