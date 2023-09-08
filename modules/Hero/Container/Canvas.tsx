import { useState, useMemo, Suspense } from 'react';
import { Box } from '@mui/material';
import { Vector3 } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { KeyboardControls } from '@react-three/drei';
import { Physics } from '@react-three/rapier';

// components
import { Floor, Music, Robot, Title } from '@/components';

export const Controls = {
  forward: 'forward',
  backward: 'backward',
  left: 'left',
  right: 'right',
  jump: 'jump',
  sprint: 'sprint',
  reset: 'reset',
};

function Intro() {
  const [vec] = useState(() => new Vector3());
  return useFrame((state, delta) => {
    state.camera.position.lerp(
      vec.set(state.mouse.x, 3 + state.mouse.y, 16),
      delta < 0.005 ? 0.01 : 0.045
    );
    if (state.camera.position.y < 1) {
      state.camera.position.y = 1;
    }
    state.camera.lookAt(0, -0.25, 0);
  });
}

interface HeroCanvasTypes {
  muted: boolean;
  started: boolean;
}

export const HeroCanvas = (props: HeroCanvasTypes) => {
  const controlMap = useMemo(
    () => [
      { name: Controls.forward, keys: ['KeyW'] },
      { name: Controls.backward, keys: ['KeyS'] },
      { name: Controls.left, keys: ['KeyA'] },
      { name: Controls.right, keys: ['KeyD'] },
      { name: Controls.jump, keys: ['Space'] },
      { name: Controls.sprint, keys: ['Shift'] },
      { name: Controls.reset, keys: ['KeyR'] },
    ],
    []
  );

  return (
    <Box
      component='div'
      sx={{
        height: 'calc(100% + 10rem)',
        width: '100%',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <Music toggleMute={props.muted} />
      <KeyboardControls map={controlMap}>
        <Canvas
          dpr={1}
          shadows
          gl={{ alpha: false }}
          camera={{ position: [0, 1000, 1000], fov: 16 }}
          linear
        >
          <color attach='background' args={['black']} />
          <fog attach='fog' args={['black', 15, 20]} />
          <ambientLight />
          <Suspense fallback={null}>
            {props.started && <Intro />}
            <Title started={props.started} />
            <Physics>
              <Robot started={props.started} />
              <Floor />
            </Physics>
          </Suspense>
        </Canvas>
      </KeyboardControls>
      <Box
        component='div'
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '10rem',
          width: '100%',
          backgroundColor: '#000000',
          transform: 'rotate(180deg)',
          clipPath:
            'polygon(100% 0%, 0% 0% , 0% 65%, 1% 64.95%, 2% 64.8%, 3% 64.6%, 4% 64.3%, 5% 63.9%, 6% 63.45%, 7% 62.9%, 8% 62.25%, 9% 61.55%, 10% 60.8%, 11% 59.95%, 12% 59.05%, 13% 58.1%, 14% 57.1%, 15% 56.05%, 16% 55%, 17% 53.9%, 18% 52.8%, 19% 51.65%, 20% 50.5%, 21% 49.35%, 22% 48.2%, 23% 47.05%, 24% 45.9%, 25% 44.8%, 26% 43.75%, 27% 42.75%, 28% 41.75%, 29% 40.8%, 30% 39.9%, 31% 39.1%, 32% 38.35%, 33% 37.65%, 34% 37.05%, 35% 36.5%, 36% 36.05%, 37% 35.65%, 38% 35.35%, 39% 35.15%, 40% 35.05%, 41% 35%, 42% 35.05%, 43% 35.2%, 44% 35.45%, 45% 35.75%, 46% 36.15%, 47% 36.65%, 48% 37.2%, 49% 37.85%, 50% 38.55%, 51% 39.35%, 52% 40.2%, 53% 41.1%, 54% 42.05%, 55% 43.05%, 56% 44.1%, 57% 45.15%, 58% 46.3%, 59% 47.4%, 60% 48.55%, 61% 49.7%, 62% 50.85%, 63% 52%, 64% 53.15%, 65% 54.25%, 66% 55.35%, 67% 56.4%, 68% 57.45%, 69% 58.4%, 70% 59.35%, 71% 60.2%, 72% 61.05%, 73% 61.8%, 74% 62.45%, 75% 63.05%, 76% 63.6%, 77% 64.05%, 78% 64.4%, 79% 64.7%, 80% 64.85%, 81% 65%, 82% 65%, 83% 64.9%, 84% 64.75%, 85% 64.5%, 86% 64.2%, 87% 63.75%, 88% 63.25%, 89% 62.7%, 90% 62.05%, 91% 61.3%, 92% 60.5%, 93% 59.65%, 94% 58.75%, 95% 57.8%, 96% 56.8%, 97% 55.75%, 98% 54.65%, 99% 53.55%, 100% 52.4%)',
        }}
      />
    </Box>
  );
};
