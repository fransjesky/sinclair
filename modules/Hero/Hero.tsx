'use client';

import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { HeroCanvas, HeroOverlay } from './Container';

// REDUX
import { playMusic, stopMusic } from '@/redux/features/global';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';

export const Hero = () => {
  const dispatch = useAppDispatch();
  const isStarted = useAppSelector((state) => state.global.isStarted);
  const isMusicPlaying = useAppSelector((state) => state.global.isMusicPlaying);
  const [height, setHeight] = useState(0);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    isStarted && setStarted(true);
    isMusicPlaying ? setMuted(false) : setMuted(true);

    setHeight(window.innerHeight);

    // disable right click
    const handleContextMenu = (event: Event) => {
      event.preventDefault();
    };

    // prevent auto scrolling when press spacebar
    const preventSpaceScroll = (event: KeyboardEvent) => {
      if (event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault();
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', preventSpaceScroll);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', preventSpaceScroll);
    };
  }, [isStarted, isMusicPlaying]);

  const handleMute = () => {
    if (muted) {
      setMuted(false);
      dispatch(stopMusic());
    } else {
      setMuted(true);
      dispatch(playMusic());
    }
  };

  return (
    <Box
      component='div'
      sx={{
        height: { xs: height, sm: '100vh' },
        width: '100%',
      }}
    >
      <HeroCanvas muted={muted} started={started} />
      <HeroOverlay muted={muted} started={started} onClick={handleMute} />
    </Box>
  );
};
