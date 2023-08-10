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
    <>
      <Text
        color='#ffffff'
        anchorX='center'
        anchorY='middle'
        font='/NotoSansJP-ExtraLight.ttf'
        fontSize={aspect / 15}
        position={[-aspect * 1.275, aspect * 0.45, 0]}
      >
        フランス・ジェスキー
        {'\n'}
      </Text>
      <Text font='/Montserrat-Black.ttf' fontSize={aspect}>
        JESKY
        <meshBasicMaterial toneMapped={false}>
          <videoTexture attach='map' args={[video]} />
        </meshBasicMaterial>
      </Text>
    </>
  );
}
