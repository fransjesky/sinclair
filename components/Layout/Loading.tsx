'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import { useProgress } from '@react-three/drei';
import Image from 'next/image';
import ProgressBar from './ProgressBar';

interface LoadingTypes {
  started: boolean;
  onClick: () => void;
}

export default function LoadingOverlay(props: LoadingTypes) {
  const { item, loaded, total } = useProgress();
  const [enableStart, setEnableStart] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updatedProgress = (loaded / total) * 100;
    setProgress((current) =>
      // only update the progress if it has more value than previous progress percentage
      current > updatedProgress ? current : updatedProgress
    );

    setTimeout(() => {
      if (progress === 100) setEnableStart(true);
    }, 250);
  }, [progress, item, loaded, total]);

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
        display: props.started ? 'none' : 'flex',
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
      <ProgressBar item={item} progress={loaded || total ? progress : 0} />
      <Box
        component='div'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            color: '#ffffff',
            fontSize: '1rem',
            fontWeight: 300,
          }}
        >
          LOADING STATUS
        </Typography>
        <Typography
          variant='h1'
          sx={{
            color: '#ffffff',
            fontSize: '2.25rem',
            fontWeight: 900,
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
          onClick={props.onClick}
          disabled={enableStart ? false : true}
          sx={{
            minWidth: '10rem',
            padding: '0.5rem 3rem',
            border: '0.125rem solid #00e5ff',
            borderRadius: '0.5rem',
            color: '#00e5ff',
            fontWeight: 900,
            letterSpacing: '0.125rem',
            transition: 'all 0.3s ease',
            '&:hover': {
              padding: '0.5rem 5rem',
              color: '#ffffff',
              cursor: 'pointer',
              backgroundColor: '#00e5ff',
            },
            '&:disabled': {
              color: '#ff5722',
              border: '0.125rem solid #ff5722',
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
              sx={{ color: '#ff5722' }}
            />
          )}
        </Button>
      </Box>
    </Box>
  );
}