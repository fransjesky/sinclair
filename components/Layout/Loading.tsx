'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import { useProgress } from '@react-three/drei';
import Image from 'next/image';
import ProgressBar from './ProgressBar';
import GlyphText from './GlyphText';

// REDUX
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { start, mobileViewport } from '@/redux/features/global';

export default function LoadingOverlay() {
  const started = useAppSelector((state) => state.global.isStarted);
  const { item, loaded, total } = useProgress();
  const [enableStart, setEnableStart] = useState(false);
  const [progress, setProgress] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (window.innerWidth <= 600) dispatch(mobileViewport());

    const updatedProgress = (loaded / total) * 100;
    setProgress((current) =>
      // only update the progress if it has more value than previous progress percentage
      current > updatedProgress ? current : updatedProgress
    );

    setTimeout(() => {
      if (progress === 100) setEnableStart(true);
    }, 350);
  }, [progress, item, loaded, total, dispatch]);

  const handleStart = () => {
    dispatch(start());
  };

  return (
    <Box
      component='div'
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: '100%',
        width: '100%',
        display: started ? 'none' : 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        transition: 'all 0.3s ease',
        zIndex: 999,
      }}
    >
      <Image
        priority
        src='/Loader.gif'
        alt='loader'
        width={200}
        height={150}
        quality={100}
        style={{
          objectFit: 'contain',
          border: 'none',
          outline: 'none',
          userSelect: 'none',
        }}
      />
      <ProgressBar
        item={item}
        enableStart={enableStart}
        progress={loaded || total ? progress : 0}
      />
      <Box
        component='div'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <GlyphText
          english='loading status'
          japanese='読み込みステータス'
          delay={300}
        />
        <Typography
          variant='h1'
          sx={{
            color: '#ffffff',
            fontSize: '2.25rem',
            fontWeight: 900,
            letterSpacing: '0.125rem',
          }}
        >
          {enableStart
            ? `READY`
            : progress === 0
            ? `INITIALIZING`
            : `NOW LOADING`}
        </Typography>
      </Box>
      <Box component='div' sx={{ marginTop: '2.5rem' }}>
        <Button
          onClick={handleStart}
          disabled={enableStart ? false : true}
          sx={{
            minWidth: '10rem',
            padding: '0.5rem 3rem',
            border: '0.125rem solid #2196f3',
            borderRadius: '0.5rem',
            fontWeight: 900,
            letterSpacing: '0.125rem',
            color: enableStart ? '#ffffff' : '#333333',
            backgroundColor: enableStart ? '#2196f3' : 'transparent',
            cursor: 'pointer',
            position: 'relative',
            transition: 'all 0.3s ease',
            animation: 'hueSwitch 20s linear infinite',
            '&:hover': {
              padding: '0.5rem 5rem',
              color: '#ffffff',
              backgroundColor: enableStart ? '#2196f3' : 'transparent',
            },
            '&:disabled': {
              color: '#333333',
              border: '0.125rem solid #333333',
            },
          }}
        >
          {enableStart ? (
            'START'
          ) : (
            <CircularProgress
              size={25}
              thickness={5}
              value={100}
              sx={{ color: '#333333' }}
            />
          )}
        </Button>
      </Box>
    </Box>
  );
}
