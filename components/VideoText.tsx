import { useState, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';

function VideoText() {
  const { viewport } = useThree();
  const responsiveFontSize = viewport.aspect;

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
    <Text font='/Montserrat-Black.ttf' fontSize={responsiveFontSize}>
      JESKY
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach='map' args={[video]} />
      </meshBasicMaterial>
    </Text>
  );
}

export default VideoText;
