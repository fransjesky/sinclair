import { useRef, useEffect } from 'react';

// REDUX
import { playMusic, stopMusic } from '@/redux/features/global';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
interface MusicTypes {
  toggleMute: boolean;
}

export default function Music(props: MusicTypes) {
  const dispatch = useAppDispatch();
  const audioRef = useRef<HTMLAudioElement>(null!);
  const start = useAppSelector((state) => state.global.isStarted);

  useEffect(() => {
    if (audioRef.current) {
      if (props.toggleMute) {
        audioRef.current.pause();
        dispatch(stopMusic());
      } else {
        audioRef.current.play();
        dispatch(playMusic());
      }

      start ? (audioRef.current.volume = 0.1) : (audioRef.current.volume = 0);
    }
  }, [props.toggleMute, start, dispatch]);

  return (
    start && (
      <audio ref={audioRef} autoPlay>
        <source src='BGM.mp3' type='audio/mpeg' />
      </audio>
    )
  );
}
