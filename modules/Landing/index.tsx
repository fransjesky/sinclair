'use client';

import { Box } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cube from '@/components/Cube';

export default function Landing() {
  return (
    <Box sx={{ height: '100vh' }}>
      <Canvas>
        <OrbitControls />
        <Cube />
      </Canvas>
    </Box>
  );
}
