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
  const [showTitle, setShowTitle] = useState(false);
  const directionalLightRef = useRef<DirectionalLight>(null!);
  const montserrat = '/Montserrat.ttf';
  const notoSansJP = 'NotoSansJP.ttf';

  useLoader(FileLoader, montserrat);
  useLoader(FileLoader, notoSansJP);
  useLoader(FileLoader, 'Video.mp4');

  const [video] = useState(() =>
    Object.assign(document.createElement('video'), {
      src: '/Video.mp4',
      crossOrigin: 'Anonymous',
      loop: true,
      muted: true,
      playsInline: true,
    })
  );

  useEffect(() => {
    props.started &&
      setTimeout(() => {
        void video.play();
        setShowTitle(true);
      }, 1500);
  }, [video, props]);

  useHelper(directionalLightRef, DirectionalLightHelper);

  return (
    showTitle && (
      <group position={[0, 0.5, -1]}>
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
    )
  );
}
