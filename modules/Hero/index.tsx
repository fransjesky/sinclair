'use client';

import { Box } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';

import Airplane from '@/components/Airplane';

export default function Hero() {
  return (
    <Box sx={{ height: '100vh', width: '100%' }}>
      <Canvas camera={{ position: [-3, 2, 3] }}>
        <Perf position='top-left' />
        <OrbitControls
          makeDefault
          enablePan={false}
          minDistance={3}
          maxDistance={10}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI * 0.75}
        />
        <ambientLight intensity={2} />
        <Airplane />
      </Canvas>
    </Box>
  );
}
