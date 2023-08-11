'use client';

import { useState, useEffect, Suspense } from 'react';
import { Box } from '@mui/material';
import { Vector3 } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

// components
import Floor from '@/components/Floor';
import Title from '@/components/Title';
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
      <Box
        sx={{
          position: 'absolute' as 'absolute',
          bottom: 0,
          right: {
            xs: '50%',
            sm: 0,
          },
          transform: {
            xs: 'translate(50%, -25%)',
            sm: 'translate(-10%, -25%)',
          },
          zIndex: 1,
          opacity: 0.25,
          transition: 'all 0.3s ease',
          '&:hover': {
            opacity: 1,
            cursor: 'pointer',
          },
        }}
      >
        <audio controls autoPlay loop>
          <source src='/BGM.mp3' type='audio/mpeg' />
        </audio>
      </Box>
      <Canvas
        dpr={[1.5, 2]}
        gl={{ alpha: false }}
        camera={{ position: [0, 100, 100], fov: 15 }}
        linear
      >
        <color attach='background' args={['black']} />
        <fog attach='fog' args={['black', 15, 20]} />
        <Suspense fallback={null}>
          <Floor />
          <Title />
          <ambientLight />
          <Intro />
        </Suspense>
      </Canvas>
      <LoadingOverlay started={started} onClick={handleStart} />
    </Box>
  );
}
