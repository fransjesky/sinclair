'use client';

import { useState, useEffect, Suspense } from 'react';
import { Box } from '@mui/material';
import { Vector3 } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

// components
import Floor from '@/components/Floor';
import Title from '@/components/Title';
import Music from '@/components/Music';
import LoadingOverlay from '@/components/Loading';

function Intro() {
  const [vec] = useState(() => new Vector3());
  return useFrame((state) => {
    state.camera.position.lerp(
      vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14),
      0.05
    );
    state.camera.lookAt(0, 0, 0);
  });
}

export default function HeroCanvas() {
  const [height, setHeight] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setHeight(window.innerHeight);
  });

  const handleStart = () => {
    setStarted(true);
  };

  return (
    <Box
      sx={{
        height: { xs: height, sm: '100vh' },
        width: '100%',
      }}
    >
      <Canvas
        dpr={[1.5, 2]}
        gl={{ antialias: true, alpha: false }}
        camera={{ position: [0, 100, 100], fov: 15 }}
        linear
      >
        <color attach='background' args={['black']} />
        <fog attach='fog' args={['black', 20, 30]} />
        <Suspense fallback={null}>
          <Floor />
          <Title started={started} />
          <Music started={started} />
          {started && <Intro />}
          <ambientLight />
        </Suspense>
      </Canvas>
      <LoadingOverlay started={started} onClick={handleStart} />
    </Box>
  );
}
