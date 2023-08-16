'use client';

import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import HeroOverlay from './Overlay';
import HeroCanvas from './Canvas';

export default function Hero() {
  const [height, setHeight] = useState(0);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

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
      <HeroCanvas muted={muted} />
      <HeroOverlay muted={muted} onClick={handleMute} />
    </Box>
  );
}
