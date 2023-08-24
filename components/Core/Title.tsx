import { useState, useEffect, useRef } from 'react';
import { FileLoader, DirectionalLight, DirectionalLightHelper } from 'three';
import { useThree, useLoader } from '@react-three/fiber';
import { Text, useHelper } from '@react-three/drei';

interface TitleTypes {
  started: boolean;
}

export default function Title(props: TitleTypes) {
  const { viewport } = useThree();
  const aspect = viewport.aspect;
  const directionalLightRef = useRef<DirectionalLight>(null!);
  const montserrat = '/Montserrat.ttf';
  const notoSansJP = 'NotoSansJP.ttf';

  const [video] = useState(() =>
    Object.assign(document.createElement('video'), {
      src: '/Video.mp4',
      crossOrigin: 'Anonymous',
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);

  useHelper(directionalLightRef, DirectionalLightHelper);

  useLoader(FileLoader, montserrat);
  useLoader(FileLoader, notoSansJP);

  return (
    <group position={[0, 0.15, -1]}>
      <Text
        color='#ffffff'
        anchorX='center'
        anchorY='middle'
        font={notoSansJP}
        fontSize={aspect / 10}
        position={[aspect * -0.8, aspect * 0.375, 0]}
      >
        フランス・ジェスキー
      </Text>
      <Text font={montserrat} fontSize={aspect / 1.25}>
        JESKY
        <meshBasicMaterial toneMapped={false}>
          <videoTexture attach='map' args={[video]} />
        </meshBasicMaterial>
      </Text>
    </group>
  );
}
