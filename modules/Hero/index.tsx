'use client';

import { useState, useEffect, useMemo, Suspense } from 'react';
import { Box } from '@mui/material';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { Vector3 } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { KeyboardControls } from '@react-three/drei';
import { Physics } from '@react-three/rapier';

// components
import Floor from '@/components/Floor';
import Title from '@/components/Title';
import Robot from '@/components/Robot';
import Music from '@/components/Music';
import LoadingOverlay from '@/components/Loading';

export const Controls = {
  forward: 'forward',
  backward: 'backward',
  left: 'left',
  right: 'right',
  jump: 'jump',
};

function Intro() {
  const [vec] = useState(() => new Vector3());
  return useFrame((state, delta) => {
    state.camera.position.lerp(
      vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14),
      delta < 0.005 ? 0.01 : 0.045
    );
    if (state.camera.position.y < 1) {
      state.camera.position.y = 1;
    }
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

  const controlMap = useMemo(
    () => [
      { name: Controls.forward, keys: ['ArrowUp', 'KeyW'] },
      { name: Controls.backward, keys: ['ArrowDown', 'KeyS'] },
      { name: Controls.left, keys: ['ArrowLeft', 'KeyA'] },
      { name: Controls.right, keys: ['ArrowRight', 'KeyD'] },
      { name: Controls.jump, keys: ['Space'] },
    ],
    []
  );

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
      <KeyboardControls map={controlMap}>
        <Canvas
          dpr={[1.5, 2]}
          gl={{ antialias: true, alpha: false }}
          camera={{ position: [0, 1000, 1000], fov: 15 }}
          linear
        >
          <color attach='background' args={['black']} />
          <fog attach='fog' args={['black', 15, 20]} />
          <Suspense fallback={null}>
            <Music started={started} toggleMute={muted} />
            <Title started={started} />
            <Physics>
              <Robot started={started} />
              <Floor />
            </Physics>
          </Suspense>
          <ambientLight />
          {started && <Intro />}
        </Canvas>
        <LoadingOverlay started={started} onClick={handleStart} />
      </KeyboardControls>
    </Box>
  );
}
