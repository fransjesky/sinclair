import { useState, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { Text, useTexture } from '@react-three/drei';

interface TitleTypes {
  started: boolean;
}

interface TextTypes {
  text: string;
  font: string;
  fontSize: number;
  xPosition?: number;
  yPosition?: number;
}

const renderTitle = ({
  text,
  font,
  fontSize,
  xPosition,
  yPosition,
}: TextTypes) => (
  <Text
    color='#ffffff'
    anchorX='center'
    anchorY='middle'
    font={font}
    fontSize={fontSize}
    position={[xPosition ? xPosition : 0, yPosition ? yPosition : 0, 0]}
  >
    {text}
  </Text>
);

export default function Title(props: TitleTypes) {
  const { viewport } = useThree();
  const aspect = viewport.aspect;

  // const [video] = useState(() => {
  //   const vid = document.createElement('video');
  //   vid.src = '/Kyoto.mp4';
  //   vid.crossOrigin = 'Anonymous';
  //   vid.loop = true;
  //   vid.muted = true;
  //   vid.playsInline = true;
  //   vid.preload = 'auto';
  //   return vid;
  // });

  // useEffect(() => {
  //   if (props.started) {
  //     video.play();
  //   }
  // });

  return (
    <group position={[0, -0.1, -2]}>
      {renderTitle({
        text: 'フランス・ジェスキー |',
        font: '/NotoSansJP-ExtraLight.ttf',
        fontSize: aspect / 14,
        xPosition: -aspect * 1.25,
        yPosition: aspect * 0.45,
      })}
      {renderTitle({
        text: 'Frontend Developer',
        font: '/NotoSansJP-Bold.ttf',
        fontSize: aspect / 14,
        xPosition: -aspect * 0.5,
        yPosition: aspect * 0.45,
      })}
      {/* {props.started && (
        <Text font='/Montserrat-Black.ttf' fontSize={aspect / 2}>
          JESKY
          <meshBasicMaterial toneMapped={false}>
            <videoTexture
              attach='map'
              args={[video]}
              colorSpace='srgb-linear'
            />
          </meshBasicMaterial>
        </Text>
      )} */}
      {props.started &&
        renderTitle({
          text: 'JESKY',
          font: '/Montserrat-Black.ttf',
          fontSize: aspect / 2,
        })}
    </group>
  );
}
