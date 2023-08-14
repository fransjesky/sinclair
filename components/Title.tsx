import { useState, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';

interface TitleTypes {
  started: boolean;
}

export default function Title(props: TitleTypes) {
  const { viewport } = useThree();
  const aspect = viewport.aspect;

  const [video] = useState(() => {
    const vid = document.createElement('video');
    vid.src = '/Kyoto.mp4';
    vid.crossOrigin = 'Anonymous';
    vid.loop = true;
    vid.muted = true;
    vid.playsInline = true;
    vid.preload = 'auto';
    return vid;
  });

  useEffect(() => {
    if (props.started) {
      void video.play();
    }
  }, [video, props.started]);

  return (
    <group position={[0, -0.1, -2]}>
      <Text
        color='#ffffff'
        anchorX='center'
        anchorY='middle'
        font='/NotoSansJP-ExtraLight.ttf'
        fontSize={aspect / 14}
        position={[-aspect * 1.25, aspect * 0.45, 0]}
      >
        フランス・ジェスキー |
      </Text>
      <Text
        color='#ffffff'
        anchorX='center'
        anchorY='middle'
        font='/NotoSansJP-Bold.ttf'
        fontSize={aspect / 14}
        position={[-aspect * 0.5, aspect * 0.445, 0]}
      >
        Frontend Developer
      </Text>
      {props.started && (
        <Text font='/Montserrat-Black.ttf' fontSize={aspect}>
          JESKY
          <meshBasicMaterial toneMapped={false}>
            <videoTexture
              attach='map'
              args={[video]}
              colorSpace='srgb-linear'
            />
          </meshBasicMaterial>
        </Text>
      )}
    </group>
  );
}
