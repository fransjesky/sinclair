import { useRef, useEffect } from 'react';
import { PositionalAudio as AudioTypes } from 'three';
import { PositionalAudio } from '@react-three/drei';

interface MusicTypes {
  started: boolean;
  toggleMute: boolean;
}

export default function Music(props: MusicTypes) {
  const audioRef = useRef<AudioTypes>(null!);

  useEffect(() => {
    if (audioRef.current) {
      props.toggleMute ? audioRef.current.pause() : audioRef.current.play();
    }
  }, [props.toggleMute]);

  return (
    props.started && (
      <PositionalAudio ref={audioRef} autoplay loop url='/BGM.mp3' load />
    )
  );
}
