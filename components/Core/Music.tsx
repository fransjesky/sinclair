import { useRef, useEffect } from 'react';
import { PositionalAudio as AudioTypes, AudioLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { PositionalAudio } from '@react-three/drei';

interface MusicTypes {
  started: boolean;
  toggleMute: boolean;
}

export default function Music(props: MusicTypes) {
  const audioRef = useRef<AudioTypes>(null!);
  useLoader(AudioLoader, '/BGM.mp3');

  useEffect(() => {
    if (audioRef.current) {
      props.toggleMute ? audioRef.current.pause() : audioRef.current.play();
    }
  }, [props.toggleMute]);

  return (
    props.started && (
      <PositionalAudio
        ref={audioRef}
        distance={2}
        autoplay
        loop
        url='/BGM.mp3'
        load
      />
    )
  );
}
