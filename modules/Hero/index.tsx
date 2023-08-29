'use client';

import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import HeroOverlay from './Overlay';
import HeroCanvas from './Canvas';

// REDUX
import { useAppSelector } from '@/redux/hooks';

export default function Hero() {
  const isStarted = useAppSelector((state) => state.global.isStarted);
  const [height, setHeight] = useState(0);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    isStarted && setStarted(true);
    setHeight(window.innerHeight);

    // disable right click
    const handleContextMenu = (event: Event) => {
      event.preventDefault();
    };

    window.addEventListener('contextmenu', handleContextMenu);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [isStarted]);

  const handleMute = () => {
    muted ? setMuted(false) : setMuted(true);
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
}
