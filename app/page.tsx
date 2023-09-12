'use client';

import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Hero, Profile, Projects } from '@/modules';
import { LoadingOverlay } from '@/components';
import { useAppSelector } from '@/redux';

export default function Home() {
  const [showPage, setShowPage] = useState(false);
  const started = useAppSelector((state) => state.global.isStarted);

  useEffect(() => {
    started &&
      setTimeout(() => {
        setShowPage(true);
      }, 3500);
  }, [started]);

  return started ? (
    <>
      <Hero />
      <Box
        component='div'
        sx={{ opacity: showPage ? 1 : 0, transition: 'opacity 0.3s ease' }}
      >
        <Profile />
        <Projects />
      </Box>
    </>
  ) : (
    <LoadingOverlay />
  );
}
