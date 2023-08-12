'use client';

import { useState, useEffect, Suspense } from 'react';
import { Box } from '@mui/material';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { Vector3 } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

// components
import Floor from '@/components/Floor';
import Title from '@/components/Title';
import Robot from '@/components/Robot';
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
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  const handleStart = () => {
    setStarted(true);
  };

  const handleMute = () => {
    muted ? setMuted(false) : setMuted(true);
  };

  return (
    <Box
      component='div'
      sx={{
        height: { xs: height, sm: '100vh' },
        width: '100%',
      }}
    >
      <Box
        component='div'
        onClick={handleMute}
        sx={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          zIndex: 2,
          color: '#ffffff',
          '&:hover': {
            cursor: 'pointer',
          },
        }}
      >
        {muted ? <MusicOffIcon /> : <MusicNoteIcon />}
      </Box>
      <Canvas
        dpr={[1.5, 2]}
        gl={{ antialias: true, alpha: false }}
        camera={{ position: [0, 1000, 1000], fov: 15 }}
        linear
      >
        <color attach='background' args={['black']} />
        <fog attach='fog' args={['black', 15, 20]} />
        <Suspense fallback={null}>
          <Title started={started} />
          <Music started={started} toggleMute={muted} />
          <Robot started={started} />
          <Floor />
        </Suspense>
        <ambientLight />
        {started && <Intro />}
      </Canvas>
      <LoadingOverlay started={started} onClick={handleStart} />
    </Box>
  );
}
