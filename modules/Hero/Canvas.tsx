import { useState, useMemo, Suspense } from 'react';
import { Box } from '@mui/material';
import { Vector3 } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { KeyboardControls } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import { Perf } from 'r3f-perf';

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
  sprint: 'sprint',
};

function Intro() {
  const [vec] = useState(() => new Vector3());
  return useFrame((state, delta) => {
    state.camera.position.lerp(
      vec.set(state.mouse.x, 3 + state.mouse.y, 14),
      delta < 0.005 ? 0.01 : 0.045
    );
    if (state.camera.position.y < 1) {
      state.camera.position.y = 1;
    }
    state.camera.lookAt(0, 0, 0);
  });
}

interface HeroCanvasTypes {
  muted: boolean;
  started: boolean;
  onClick: () => void;
}

export default function HeroCanvas(props: HeroCanvasTypes) {
  const controlMap = useMemo(
    () => [
      { name: Controls.forward, keys: ['ArrowUp', 'KeyW'] },
      { name: Controls.backward, keys: ['ArrowDown', 'KeyS'] },
      { name: Controls.left, keys: ['ArrowLeft', 'KeyA'] },
      { name: Controls.right, keys: ['ArrowRight', 'KeyD'] },
      { name: Controls.jump, keys: ['Space'] },
      { name: Controls.sprint, keys: ['Shift'] },
    ],
    []
  );

  return (
    <Box component='div' sx={{ height: '100%', width: '100%' }}>
      <KeyboardControls map={controlMap}>
        <Canvas
          dpr={[1.5, 2]}
          gl={{ antialias: true, alpha: false }}
          camera={{ position: [0, 1000, 1000], fov: 15, near: 0.001 }}
          linear
        >
          <Perf />
          <color attach='background' args={['black']} />
          <fog attach='fog' args={['black', 15, 20]} />
          <Suspense fallback={null}>
            <Music started={props.started} toggleMute={props.muted} />
            <Title started={props.started} />
            <Physics>
              <Robot started={props.started} />
              <Floor />
            </Physics>
          </Suspense>
          <ambientLight />
          {props.started && <Intro />}
        </Canvas>
        <LoadingOverlay started={props.started} onClick={props.onClick} />
      </KeyboardControls>
    </Box>
  );
}
