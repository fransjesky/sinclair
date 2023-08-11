import { useState, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';

interface TitleTypes {
  started: boolean;
}

export default function Title(props: TitleTypes) {
  const { viewport } = useThree();
  const aspect = viewport.aspect;

  const [video] = useState(() =>
    Object.assign(document.createElement('video'), {
      src: '/Kyoto.mp4',
      crossOrigin: 'Anonymous',
      loop: true,
      muted: true,
      playsInline: true,
    })
  );

  useEffect(() => {
    if (props.started) {
      void video.play();
    }
  }, [video, props.started]);

  return (
    <group position={[0, 0, -0.5]}>
      <Text
        color='#ffffff'
        anchorX='center'
        anchorY='middle'
        font='/NotoSansJP-ExtraLight.ttf'
        fontSize={aspect / 12}
        position={[-aspect * 1.175, aspect * 0.5, 0]}
      >
        フランス・ジェスキー |
      </Text>
      <Text
        color='#ffffff'
        anchorX='center'
        anchorY='middle'
        font='/NotoSansJP-Bold.ttf'
        fontSize={aspect / 12}
        position={[-aspect * 0.325, aspect * 0.5, 0]}
      >
        Creative Developer
      </Text>
      {props.started && (
        <Text font='/Montserrat-Black.ttf' fontSize={aspect}>
          JESKY
          <meshBasicMaterial toneMapped={false}>
            <videoTexture attach='map' args={[video]} />
          </meshBasicMaterial>
        </Text>
      )}
    </group>
  );
}
