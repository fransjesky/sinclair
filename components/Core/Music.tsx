import { useRef, useEffect } from 'react';
import { AudioLoader } from 'three';
import { useLoader } from '@react-three/fiber';

interface MusicTypes {
  started: boolean;
  toggleMute: boolean;
}

export default function Music(props: MusicTypes) {
  useLoader(AudioLoader, '/BGM.mp3');
  const audioRef = useRef<HTMLAudioElement>(null!);

  useEffect(() => {
    if (audioRef.current) {
      props.toggleMute ? audioRef.current.pause() : audioRef.current.play();

      props.started
        ? (audioRef.current.volume = 0.5)
        : (audioRef.current.volume = 0);
    }
  }, [props.toggleMute, props.started]);

  return (
    props.started && (
      <audio ref={audioRef} autoPlay loop>
        <source src='BGM.mp3' type='audio/mpeg' />
      </audio>
    )
  );
}
