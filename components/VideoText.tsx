import { useState, useEffect } from 'react';
import { Text } from '@react-three/drei';

function VideoText() {
  const [video] = useState(() =>
    Object.assign(document.createElement('video'), {
      src: '/video.mp4',
      crossOrigin: 'Anonymous',
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);

  return (
    <Text font='/Montserrat-Black.ttf' fontSize={2} letterSpacing={-0.02}>
      JESKY
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach='map' args={[video]} />
      </meshBasicMaterial>
    </Text>
  );
}

export default VideoText;
