'use client';

import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import HeroOverlay from './Overlay';
import HeroCanvas from './Canvas';

// REDUX
import { useAppDispatch } from '@/redux/hooks';
import { start } from '@/redux/features/global';

export default function Hero() {
  const dispatch = useAppDispatch();
  const [height, setHeight] = useState(0);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setHeight(window.innerHeight);

    const handleContextMenu = (event: Event) => {
      event.preventDefault();
    };

    window.addEventListener('contextmenu', handleContextMenu);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  const handleMute = () => {
    muted ? setMuted(false) : setMuted(true);
  };

  const handleStart = () => {
    setStarted(true);
    dispatch(start());
  };

  return (
    <Box
      component='div'
      sx={{
        height: { xs: height, sm: '100vh' },
        width: '100%',
      }}
    >
      <HeroCanvas muted={muted} started={started} onClick={handleStart} />
      <HeroOverlay muted={muted} started={started} onClick={handleMute} />
    </Box>
  );
}
