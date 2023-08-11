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
      playsInline: true,
    })
  );
  // useEffect(() => void video.play(), [video]);

  // Function to handle video playback
  const handleVideoPlay = () => {
    if (video.paused) {
      video.play().catch((error) => {
        console.error('Video playback error:', error);
      });
    }
  };

  useEffect(() => {
    // Add a click event listener to the document
    document.addEventListener('click', handleVideoPlay);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleVideoPlay);
    };
  }, [video]);

  return (
    <group>
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
      <Text font='/Montserrat-Black.ttf' fontSize={aspect}>
        JESKY
        <meshBasicMaterial toneMapped={false}>
          <videoTexture attach='map' args={[video]} />
        </meshBasicMaterial>
      </Text>
    </group>
  );
}
