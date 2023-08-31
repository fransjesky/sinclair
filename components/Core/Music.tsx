import { useRef, useEffect } from 'react';

// REDUX
import { useAppSelector } from '@/redux/hooks';
interface MusicTypes {
  toggleMute: boolean;
}

export default function Music(props: MusicTypes) {
  const audioRef = useRef<HTMLAudioElement>(null!);
  const start = useAppSelector((state) => state.global.isStarted);

  useEffect(() => {
    if (audioRef.current) {
      props.toggleMute ? audioRef.current.pause() : audioRef.current.play();

      start ? (audioRef.current.volume = 0.1) : (audioRef.current.volume = 0);
    }
  }, [props.toggleMute, start]);

  return (
    start && (
      <audio ref={audioRef} autoPlay loop>
        <source src='BGM.mp3' type='audio/mpeg' />
      </audio>
    )
  );
}
