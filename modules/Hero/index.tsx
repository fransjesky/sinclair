'use client';

import { useState, Suspense } from 'react';
import { Box } from '@mui/material';
import { Vector3 } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';

// components
import Floor from '@/components/Floor';
import VideoText from '@/components/VideoText';

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

export default function Hero() {
  return (
    <Box sx={{ height: '100vh', width: '100%' }}>
      <Canvas
        gl={{ alpha: false }}
        camera={{ position: [0, 3, 100], fov: 15 }}
        linear
      >
        <OrbitControls />
        <Perf position='top-left' />
        <color attach='background' args={['black']} />
        <fog attach='fog' args={['black', 15, 20]} />
        <Suspense fallback={null}>
          <VideoText />
          <Floor />
          <ambientLight intensity={1.5} />
          <Intro />
        </Suspense>
      </Canvas>
    </Box>
  );
}
