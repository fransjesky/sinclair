import { useState, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';

export default function Title() {
  const { viewport } = useThree();
  const aspect = viewport.aspect;

  const [video] = useState(() =>
    Object.assign(document.createElement('video'), {
      src: '/Kyoto.mp4',
      crossOrigin: 'Anonymous',
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);

  return (
    <group>
      <Text
        color='#ffffff'
        anchorX='center'
        anchorY='middle'
        font='/NotoSansJP-ExtraLight.ttf'
        fontSize={aspect / 15}
        position={[-aspect * 0.975, aspect * 0.5, 0]}
      >
        フランス・ジェスキー | Creative Developer
      </Text>
      <Text font='/Montserrat-Black.ttf' fontSize={aspect}>
        JESKY
        <meshBasicMaterial toneMapped={false}>
          <videoTexture attach='map' args={[video]} />
        </meshBasicMaterial>
      </Text>
    </group>
  );
}
